import models from '../database/models'

const { ProfilePicture } = models 

class ProfilePictureService {
  static async _populateProfPic (userId) {
    const profPic = await ProfilePicture.create({
      userId
    })

    return profPic
  }

  static async _modifyProfPic (userId, image) {
    try {
      const profPic = await ProfilePicture.findOne({
        where: { userId }
      })
      profPic.update({ image })
      
      return profPic.dataValues
    } catch (e) {
      console.log(e)
      return 'Sequelize Error'
    }
  }

  // static async _loadProfPic (userId) {
  //   const image = await ProfilePicture.findOne({
  //     where: { userId }
  //   })

  //   return image.dataValues
  // }
}

export default ProfilePictureService
