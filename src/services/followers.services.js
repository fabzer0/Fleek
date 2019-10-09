import { Op } from "sequelize";
import models from "../database/models";

const { Follower } = models;

class FollowersService {
  static async _follow(userId, followId) {
    const following = await Follower.create({
      userId,
      followId
    });

    return following.dataValues;
  }

  static async _unfollow(userId, followId) {
    await Follower.destroy({
      where: {
        [Op.and]: [{ userId }, { followId }]
      }
    });

    return "Success";
  }

  static followersCount(followId) {
    Follower.findAndCountAll({
      where: { followId }
    })
      .then(followers => {
        return followers;
      })
      .catch(e => {
        console.log(e);
      });
  }

  static followingCount(userId) {
    Follower.findAndCountAll({
      where: { userId }
    })
      .then(following => {
        return following;
      })
      .catch(e => {
        console.log(e);
      });
  }
}

export default FollowersService;
