import { expect } from "chai";
import VerificationHelper from "../sendgrid.helper";

describe("VerificationHelper", () => {
  describe("sendVerificationEmail", () => {
    /*
      - This tests will fail because I have reached the max
        amount of emails to be sent in one month. Commented out
        till further notice...
    */
    // it('should successfully send the verification link', async () => {
    //   const response = await VerificationHelper.sendVerificationEmail('fabischapeli97@gmail.com', 'U832/6uJFYPkOTi3')
    //   expect(response.statusCode).to.equal(202)
    // })
    // it('should return error in the catch block', (done) => {
    //   const result = VerificationHelper.sendVerificationEmail(1, 'U832/6uJFYPkOTi3')
    //   expect(result.message).to.equal('Response error')
    //   done()
    // })
  });
});
