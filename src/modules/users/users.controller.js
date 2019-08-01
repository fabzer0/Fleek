const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserService = require('../../services/user.services')
const VerificationServices = require('../../services/verificationtoken.services')
const { APP_SECRET } = require('../../utils')

class UserController {
  static async createUser (req, res) {
    try {
      const { body: { username, email, password, country, city } } = req
      const { _options: { isNewRecord }, dataValues } = await UserService._findOrCreateUser(
        username, email, password, country, city
      )
      if (isNewRecord) {
        await VerificationServices.sendEmailToken(dataValues.id, dataValues.email)
        return res.status(201).json({
          message: 'Check your email for account verification',
          user: dataValues
        })
      }
      return res.status(409).json({ message: 'Username and Email must be unique' })
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: 'Could not complete request. Try Again!'
      })
    }
  }

  static async signInUser (req, res) {
    try {
      const { body: { username, password } } = req
      const user = await UserService._findByUsername(username)
      if (user === undefined) {
        return res.status(404).json({ message: 'Unknown user' })
      }
      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        return res.status(400).json({ message: 'Wrong password' })
      }
      if (!user.isVerified) {
        return res.status(400).json({
          message: 'You must activate/verify your account to login'
        })
      }
      const token = jwt.sign({ userId: user.id }, APP_SECRET)
      return res.status(200).json({
        success: true,
        message: 'Successful login',
        token
      })
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        error: 'There could be a problem with the server'
      })
    }
  }
}

module.exports = UserController
