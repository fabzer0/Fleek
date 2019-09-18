const env = require('./environment')

const defaultConfig = {
  databaseUrl: env.DATABASE_URL,
  dialect: env.DATABASE_DIALECT || 'postgres',
  logging: false,
  use_env_variable: 'DATABASE_URL'
}

const database = {
  development: {
    ...defaultConfig
  },
  test: {
    ...defaultConfig
  },
  staging: {
    ...defaultConfig
  },
  production: {
    ...defaultConfig
  }
}

/* DO NOT CHANGE EVER!!! */
module.exports = database
