const bcrypt = require('bcryptjs')
const { Op } = require('sequelize')
const models = require('../database/models')

const { User } = models 

class UserService {
  static async _findOrCreateUser(username, email, password, country, city) {
    const hashPWD = await bcrypt.hash(password, 10)
    const [user] = await User.findOrCreate({
      where: {
        [Op.or]: [{ username }, { email }]
      },
      defaults: {
        username,
        email,
        country,
        city,
        password: hashPWD
      },
    })
    delete user.dataValues['password']

    return user
  }
}

module.exports = UserService
