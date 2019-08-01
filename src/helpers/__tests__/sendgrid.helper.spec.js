const { expect } = require('chai')
const VerificationHelper = require('../sendgrid.helper')

describe('VerificationHelper', () => {
  describe('sendVerificationEmail', () => {
    it('should successfully send the verification link', async () => {
      const response = await VerificationHelper.sendVerificationEmail('fabischapeli97@gmail.com', 'U832/6uJFYPkOTi3')
      expect(response.statusCode).to.equal(202)
    })
    it('should return error in the catch block', async () => {
      const result = await VerificationHelper.sendVerificationEmail(1, 'U832/6uJFYPkOTi3')
      expect(result.message).to.equal('Response error')
      expect(result.response.statusCode).to.equal(400)
    })
  })
})
