import { Router } from 'express' 
import StarsController from './stars.controller'
import { appendToken } from '../../utils'

const starsRouter = Router()

starsRouter.post(
  '/star',
  appendToken,
  StarsController.star
)

starsRouter.delete(
  '/unstar',
  appendToken,
  StarsController.unstar
)

export default starsRouter
