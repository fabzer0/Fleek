require('dotenv').config() 
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)

class VerificationHelper {
  static async sendVerificationEmail(to, token) {
    const hostUrl = process.env.HOST_URL 
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
          {
            to: [{ email: to }],
            subject: 'Verify Your Email'
          }
        ],
        from: {
          email: 'no-reply@example.com'
        },
        content: [
          { 
            type: 'text/plain',
            value: `Click on this link to verify your email ${hostUrl}/verification?token=${token}&email=${to}`
          }
        ]
      }
    })

    return sg.API(request)
      .then(response => {
        return response
      })
      .catch(_err => {   
        console.log(_err)
        return _err
      })
  }
}


module.exports = VerificationHelper
