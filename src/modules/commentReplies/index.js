import { Router } from 'express'
import CommentRepliesController from './commentReplies.controller'
import { appendToken } from '../../utils/auth';


const replyCommentRouter = Router()

replyCommentRouter.use(
  '/replyComment',
  appendToken,
  CommentRepliesController.replyToComment
)

export default replyCommentRouter


