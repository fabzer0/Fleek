import { Router } from 'express'
import FollowersController from './followers.controller'
import { appendToken } from '../../utils/auth';


const followerRouter = Router()

followerRouter.post(
  '/follow',
  appendToken,
  FollowersController.follow
)

followerRouter.delete(
  '/unfollow',
  appendToken,
  FollowersController.unfollow
)

export default followerRouter
