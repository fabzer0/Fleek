import models from "../database/models";

const { Profile } = models;

class ProfileService {
  static async _populateProfile(userId) {
    const profile = await Profile.create({
      userId
    });

    return profile;
  }

  static async _modifyProfile(userId, bio, phone, gender) {
    try {
      const userProfile = await Profile.findOne({
        where: { userId }
      });
      userProfile.update({ bio, phone, gender });

      return userProfile.dataValues;
    } catch (e) {
      console.log(e);
      return "Not found";
    }
  }

  // This one is meant to prevent duplicate phone
  // numbers from being populated in the database
  // users phone number should be unique across the whole database
  static async _findByPhone(phone) {
    const phoneNo = await Profile.findOne({
      where: { phone }
    });
    if (phoneNo) {
      return true;
    }

    return false;
  }
}

export default ProfileService;
