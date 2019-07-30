const { Router } = require('express')
const UserController = require('./users.controller')
const middlewares = require('../../middlewares')

const { UserValidator } = middlewares

const userRouter = Router()


userRouter.post(
  '/register',
  UserValidator.registrationInputs,
  UserController.createUser
)

module.exports = userRouter
