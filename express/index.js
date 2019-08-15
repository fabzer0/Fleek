import http from 'http'
import debug from 'debug'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()
const port = parseInt(process.env.PORT, 10) || 3000
const logger = debug('log')

const server = http.createServer(app)
server.listen(port, async () => {
  await app.set('host', `http://localhost:${port}`)
  logger(`Find me on http://localhost:${port}`)
})
