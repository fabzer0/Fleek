const config = {
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PWD,
  port: process.env.DATABASE_PORT
}

module.exports = config
