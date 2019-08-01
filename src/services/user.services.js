const bcrypt = require('bcryptjs')
const { Op } = require('sequelize')
const models = require('../database/models')

const { User } = models

class UserService {
  static async _findOrCreateUser (username, email, password, country, city) {
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

  static async _findByUsername (username) {
    const user = await User.findOne({ where: { username } })
    if (!user) {
      return undefined
    }
    return user.dataValues
  }

  static async _findByEmail (email) {
    const user = await User.findOne({
      where: { email }
    })

    if (!user) {
      return undefined
    }

    return user.dataValues
  }

  static async updateIsVerified (id) {
    const user = await User.findByPk(id)
    user.update({ isVerified: true })
    return user.dataValues
  }
}

module.exports = UserService
