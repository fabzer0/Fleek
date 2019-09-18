import { Router } from 'express'
import CommentsController from './comments.controller'
import { appendToken } from '../../utils/auth';

const commentsRouter = Router()

commentsRouter.use(
  '/comment',
  appendToken,
  CommentsController.makeComment
)

export default commentsRouter
