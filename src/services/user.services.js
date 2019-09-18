import bcrypt from 'bcryptjs'
import { Op } from 'sequelize'
import models from '../database/models'

const { Follower, User, ProfilePicture, Profile, Post } = models

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
      }
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

  static async _findByPk (id) {
    const user = await User.findByPk(id)
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

  static async _loadUserDetails (id) {
    const user = await User.findOne({
      where: { id },
      include: [
        { model: ProfilePicture, as: 'profPic' },
        { model: Profile, as: 'profile' },
        { model: Post, as: 'posts' },
        { model: Follower, as: 'followers' },
        { model: Follower, as: 'following' }
      ],
      order: [ [{ model: Post, as: 'posts'}, 'createdAt', 'DESC' ] ]
    })
    delete user.dataValues['password']

    return user
  }
}

export default UserService
