import { Router } from 'express'
import UserController from './users.controller'
import middlewares from '../../middlewares'

const { UserValidator } = middlewares

const userRouter = Router()

userRouter.post(
  '/register',
  UserValidator.registrationInputs,
  UserController.createUser
)

userRouter.post(
  '/login',
  UserValidator.validateLoginCreds,
  UserController.signInUser
)

export default userRouter
