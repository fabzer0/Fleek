import jwt from 'jsonwebtoken'
import log from 'fancy-log'
import { APP_SECRET } from '../../utils'
import UserService from '../../services/user.services'
import VerificationServices from '../../services/verificationtoken.services'

class VerificationController {
  static async verifyEmail (req, res) {
    const { query: { email, token } } = req
    try {
      const user = await UserService._findByEmail(email)
      if (user === undefined) {
        return res.status(404).json({ message: 'Email not found' })
      }
      if (user.isVerified) {
        return res.status(202).json({ message: 'Email Already Verified' })
      }
      const verificationToken = await VerificationServices.findToken(token)
      if (verificationToken === undefined) {
        return res.status(404).json({ message: 'Token Expired' })
      }
      const updatedUser = await UserService.updateIsVerified(verificationToken.userId)
      const tokenGeneration = jwt.sign({ userId: updatedUser.id }, APP_SECRET)
      return res.status(200).json({
        message: `${updatedUser.username} has been verified`, tokenGeneration })
    } catch (e) {
      log(e)
      return res.status(403).json({
        error: 'Verification failed'
      })
    }
  }
}

export default VerificationController
