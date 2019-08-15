require('dotenv').config()
const nodemailer = require('nodemailer')
class VerificationHelper {
  static async sendVerificationEmail (to, token) {
    const hostUrl = process.env.HOST_URL
    const URL = `${hostUrl}/verify?token=${token}&email=${to}`
    const transporter = await nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'fabischapeli97@gmail.com',
        pass: 'mymoments'
      }
    })

    const mailOptions = {
      from: 'fabischapeli97@gmail.com',
      to,
      subject: 'Account Verification',
      text: 'Verify your email address to activate account',
      html: URL
    }

    await transporter.sendMail(mailOptions, (_err, info) => {
      if (_err) {
        console.log(_err)
      }
      console.log(`Email sent: ${info.response}`)
      return info.response
    })
  }
}

module.exports = VerificationHelper
