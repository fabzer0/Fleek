const jwt = require("jsonwebtoken");
import ProfileService from "../../services/profile.services";
import UserService from "../../services/user.services";
import FollowersService from "../../services/followers.services";
import { APP_SECRET } from "../../utils";

class ProfileController {
  static modifyUserProfile(req, res) {
    try {
      const { token } = req;
      jwt.verify(token, APP_SECRET, (err, authData) => {
        if (err) {
          console.log(err);
          return res.status(403).json({
            message: "You are not authorized"
          });
        }
        const {
          user: { id }
        } = authData;
        const {
          body: { bio, phone, gender }
        } = req;
        ProfileService._modifyProfile(id, bio, phone, gender).then(profile => {
          return res.status(200).json({
            profile
          });
        });
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Failed to update profile",
        error: e.message
      });
    }
  }

  static loadUserDetails(req, res) {
    try {
      const { token } = req;
      jwt.verify(token, APP_SECRET, (err, authData) => {
        if (err) {
          console.log(e);
          return res.status(403).json({
            message: "You must login first"
          });
        }

        const {
          user: { id }
        } = authData;
        UserService._loadUserDetails(id).then(userData => {
          const numPosts = userData.posts.length;
          const followersCount = userData.followers.length;
          const followingCount = userData.following.length;
          res.status(200).json({
            userData,
            numPosts,
            followersCount,
            followingCount
          });
        });
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Something went wrong"
      });
    }
  }
}

export default ProfileController;

// NOTHING ELSE, JUST WRITE SEEDS
