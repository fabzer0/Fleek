import { Router } from 'express'
import ProfilePictureController from './profilePicture.controller'
import { appendToken } from '../../utils'

const profilePictureRouter = Router()

profilePictureRouter.post(
  '/fileUpload',
  appendToken,
  ProfilePictureController.modifyUserProfilePicture
)

export default profilePictureRouter