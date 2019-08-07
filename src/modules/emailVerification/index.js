const { Router } = require('express')
const VerificationController = require('../emailVerification/verification.controller')

const verificationRouter = Router()

verificationRouter.get(
  '/verify',
  VerificationController.verifyEmail
)

module.exports = verificationRouter
