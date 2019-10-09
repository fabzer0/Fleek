import jwt from "jsonwebtoken";
import StarService from "../../services/star.services";
import { APP_SECRET } from "../../utils";

class StarsController {
  static star(req, res) {
    try {
      const {
        query: { postId },
        token
      } = req;
      jwt.verify(token, APP_SECRET, async (err, authData) => {
        if (err) {
          console.log(err);
          return res.status(403).json({
            message: "You are not authorized"
          });
        }

        const {
          user: { id }
        } = authData;
        StarService._star(id, postId).then(star => {
          return res.status(200).json({
            star
          });
        });
      });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({
        message: "Something terrible happened"
      });
    }
  }

  static unstar(req, res) {
    try {
      const {
        query: { postId },
        token
      } = req;
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
        StarService._unstar(id, postId).then(response => {
          return res.status(202).json({
            message: response
          });
        });
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Something terrible happened"
      });
    }
  }
}

export default StarsController;
