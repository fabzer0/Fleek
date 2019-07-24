const UserService = require('../../services/user.services')
const VerificationServices = require('../../services/verificationtoken.services')
class UserController {
  static async createUser(req, res) {
    try {
      const {
        body: {
          username, email, password, country, city
        }
      } = req

      const { _options: { isNewRecord }, dataValues } = await UserService._findOrCreateUser(
        username, email, password, country, city
      )

      if (isNewRecord) {
        try {
          const { id, email } = dataValues
          await VerificationServices.sendEmailToken(id, email)
          return res.status(201).json({
            success: true, 
            message: 'Check your email for account verification',
            user: dataValues
          })
        } catch (e) {
          console.log(e)
          return res.status(400).json({
            message: 'Could not generate email token'
          })
        }  
      }

      return res.status(409).json({
        success: false,
        message: 'Username and Email  must be unique'
      })
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        success: false,
        message: 'Could not complete request. Try Again!'
      })
    }
  }
}

module.exports = UserController
