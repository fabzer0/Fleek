import crypto from "crypto-random-string";
import VerificationHelper from "../helpers/sendgrid.helper";
import models from "../database/models";

const { VerificationToken } = models;

class VerificationServices {
  static async sendEmailToken(id, email) {
    try {
      const result = await VerificationToken.create({
        userId: id,
        token: crypto({ length: 16, type: "base64" })
      });

      const {
        dataValues: { token }
      } = result;
      await VerificationHelper.sendVerificationEmail(email, token);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  static async findToken(token) {
    const verificationToken = await VerificationToken.findOne({
      where: { token }
    });
    if (!verificationToken) {
      return undefined;
    }

    return verificationToken.dataValues;
  }
}

export default VerificationServices;
