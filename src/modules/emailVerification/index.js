const { Router } = require('express')
const VerificationController = require('../emailVerification/verification.controller')

const verificationRouter = Router()

verificationRouter.get(
  '/verification',
  VerificationController.verifyEmail
)

module.exports = verificationRouter
