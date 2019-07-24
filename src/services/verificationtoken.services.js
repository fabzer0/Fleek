const crypto = require('crypto-random-string')
const VerificationHelper = require('../helpers/sendgrid.helper')
const models = require('../database/models')

const { VerificationToken } = models 

class VerificationServices {
  static sendEmailToken(id, email) {
    VerificationToken.create({
      userId: id,
      token: crypto({ length: 16, type: 'base64' })
    }).then((result) => {
      const { dataValues: { token } } = result
      VerificationHelper.sendVerificationEmail(email, token)
    })
    .catch((e) => {
      console.log(e)
      return e
    })
  }
}



module.exports = VerificationServices
