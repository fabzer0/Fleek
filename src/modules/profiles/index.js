import { Router } from 'express'
import ProfileController from './profiles.controller'
import { appendToken } from '../../utils'
// import middlewares from '../../middlewares'

const profileRouter = Router()

profileRouter.post(
  '/profile',
  appendToken,
  ProfileController.modifyUserProfile
)

profileRouter.get(
  '/profile',
  appendToken,
  ProfileController.loadUserDetails
)

export default profileRouter
