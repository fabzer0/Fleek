require('dotenv').config()
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../../utils')
const models = require('../../database/models')

const { VerificationToken, User } = models 

class VerificationController {
  static verifyEmail(req, res) {
    const { query: { email, token } } = req
    return User.findOne({
      where: { email }
    })
    .then(user => {
      if (user.isVerified) {
        return res.status(202).json({
          success: false,
          message: 'Email Already Verified'
        })
      }
      return VerificationToken.findOne({
        where: { token }
      })
      .then(foundToken => {
        if (foundToken) {
          return user
            .update({ isVerified: true })
            .then(updatedUser => {
              // Synchronous Sign with default (HMAC SHA256)
              const token = jwt.sign({ userId: updatedUser.id }, APP_SECRET)
              return res.status(200).json({
                success: true,
                message: `${updatedUser.username} has been verified`,
                token
              })
            })
            .catch(reason => {
              return res.status(403).json({
                success: false,
                message: 'Verification Failed'
              })
            })
        }
        return res.status(404).json({
          success: false,
          message: 'Token Expired'
        })
      })
      .catch(reason => {
        return res.status(404).json({
          success: false,
          message: 'Token Expired'
        })
      }) 
    })
    .catch(reason => {
      return res.status(404).json({
        success: false,
        message: 'Email not found'
      })
    })
  }
}


module.exports = VerificationController
