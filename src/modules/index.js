import userRouter from './users'
import verificationRouter from './emailVerification'
import profileRouter from './profiles'
import postsRouter from './posts'
import profilePictureRouter from './profilePicture'
import starsRouter from './stars'
import commentsRouter from './comments'
import replyCommentRouter from './commentReplies'
import followerRouter from './followers'

const apiPrefix = '/api/v1'

const routes = (app) => {
  app.use(apiPrefix, userRouter)
  app.use(apiPrefix, verificationRouter)
  app.use(apiPrefix, profileRouter)
  app.use(apiPrefix, postsRouter)
  app.use(apiPrefix, profilePictureRouter)
  app.use(apiPrefix, starsRouter)
  app.use(apiPrefix, commentsRouter)
  app.use(apiPrefix, replyCommentRouter)
  app.use(apiPrefix, followerRouter)
  
  return app
}

export default routes 
