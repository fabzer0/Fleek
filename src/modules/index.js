const userRouter = require('./users')
const verificationRouter = require('./emailVerification')

const apiPrefix = '/api/v1'

const routes = (app) => {
  app.use(apiPrefix, userRouter)
  app.use(apiPrefix, verificationRouter)
  
  return app
}

module.exports = routes 
