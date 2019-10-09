import { Op } from "sequelize";
import models from "../database/models";

const { Star } = models;

class StarService {
  static async _star(userId, postId) {
    const starred = await Star.create({
      userId,
      postId
    });

    return starred.dataValues;
  }

  static async _unstar(userId, postId) {
    await Star.destroy({
      where: {
        [Op.and]: [{ userId }, { postId }]
      }
    });

    return "Sucess";
  }
}

export default StarService;
