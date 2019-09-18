import { Router } from 'express' 
import PostsController from './posts.controller'
import { appendToken } from '../../utils'

const postsRouter = Router()

postsRouter.post(
  '/posts',
  appendToken,
  PostsController.createPost
)

postsRouter.delete(
  '/posts',
  appendToken,
  PostsController.deletePost
)

export default postsRouter
