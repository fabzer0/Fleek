const Pool = require('pg').Pool
const { user, host, database, password, port } = require('./config')

const pool = new Pool({
  user,
  host,
  database, 
  password,
  port
})

module.exports = pool
