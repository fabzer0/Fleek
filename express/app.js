require('dotenv').config()
const express =  require('express') 
const morgan = require('morgan') 
const bodyParser = require('body-parser') 
const cors = require('cors')
const debug = require('debug')  
const modules = require('../src/modules')

/* Setting up the express application */
const app = express()
const logger = debug('log')
const port = parseInt(process.env.PORT, 10) || 3000

/* Log requests to the console */
app.use(morgan('dev'))
app.use(cors())

/* Parsing incoming request data */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('ci with travis')
})

/* Setting up the base url for the whole application */
modules(app)

/* Catch invalid routers */
app.use('*', (req, res) => res.status(404).json({
  message: 'Not Found. Use /api/v1 to access the api'
}))

app.listen(port, () => {
  logger(`Find me on http://localhost:${port}`)
})

modules.exports = app 
