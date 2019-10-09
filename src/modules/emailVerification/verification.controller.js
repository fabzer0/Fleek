const jwt = require("jsonwebtoken");
import { APP_SECRET } from "../../utils";
import UserService from "../../services/user.services";
import VerificationServices from "../../services/verificationtoken.services";
import ProfileService from "../../services/profile.services";
import ProfilePictureService from "../../services/profpic.services";

class VerificationController {
  static async verifyEmail(req, res) {
    const {
      query: { email, token }
    } = req;
    try {
      const user = await UserService._findByEmail(email);
      if (user === undefined) {
        return res.status(404).json({ message: "Email not found" });
      }
      if (user.isVerified) {
        return res.status(202).json({ message: "Email Already Verified" });
      }
      const verificationToken = await VerificationServices.findToken(token);
      if (verificationToken === undefined) {
        return res.status(404).json({ message: "Token Expired" });
      }
      const updatedUser = await UserService.updateIsVerified(
        verificationToken.userId
      );
      await ProfileService._populateProfile(updatedUser.id);
      await ProfilePictureService._populateProfPic(updatedUser.id);
      jwt.sign(
        { user: updatedUser },
        APP_SECRET,
        { expiresIn: "30 days" },
        (err, token) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              message: "Could not generate token"
            });
          }
          return res.status(200).json({
            message: `${updatedUser.username} has been verified`,
            token
          });
        }
      );
    } catch (e) {
      log(e);
      return res.status(403).json({
        error: "Verification failed"
      });
    }
  }
}

export default VerificationController;
