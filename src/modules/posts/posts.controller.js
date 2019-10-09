const jwt = require("jsonwebtoken");
import PostService from "../../services/posts.services";
import { APP_SECRET } from "../../utils";

class PostsController {
  static async createPost(req, res) {
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
          body: { video }
        } = req;
        PostService._createPost(id, video).then(post => {
          const {
            _options: { isNewRecord }
          } = post;
          if (isNewRecord) {
            return res.status(201).json({
              post
            });
          }
          return res.status(400).json({
            message: "Post already created or you are not the owner of the post"
          });
        });
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Failed",
        error: e.message
      });
    }
  }

  static async deletePost(req, res) {
    try {
      const {
        token,
        query: { postId }
      } = req;
      jwt.verify(token, APP_SECRET, (err, authData) => {
        if (err) {
          console.log(err);
          return res.status(403).json({
            message: "You must login first"
          });
        }

        PostService._deletePost(postId).then(response => {
          return res.status(202).json({
            message: response
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

export default PostsController;
