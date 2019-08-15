import userRouter from './users'
import verificationRouter from './emailVerification'

const apiPrefix = '/api/v1'

const routes = (app) => {
  app.use(apiPrefix, userRouter)
  app.use(apiPrefix, verificationRouter)
  
  return app
}

export default routes 
