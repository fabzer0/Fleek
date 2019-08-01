const { expect } = require('chai')
const VerificationServices = require('../verificationtoken.services')

describe('VerificationServices', () => {
  describe('sendEmailToken', () => {
    it('should return undefined if no token is found', async () => {
      const res = await VerificationServices.findToken('#jG738df#./193reTReR0s')
      expect(res).to.equal(undefined)
    })
  })
})
