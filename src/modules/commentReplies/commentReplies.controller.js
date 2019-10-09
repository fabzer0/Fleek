import jwt from "jsonwebtoken";
import CommentRepliesServices from "../../services/commetReplies.services";
import { APP_SECRET } from "../../utils/auth";

class CommentRepliesController {
  static replyToComment(req, res) {
    try {
      const {
        query: { commentId },
        body: { comment },
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
        CommentRepliesServices._replyToComent(id, commentId, comment).then(
          reply => {
            return res.status(201).json({
              reply
            });
          }
        );
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Something terrible happened"
      });
    }
  }
}

export default CommentRepliesController;
