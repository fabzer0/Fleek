import jwt from 'jsonwebtoken'
import CommentServices from '../../services/comment.services'
import { APP_SECRET } from '../../utils'

class CommentsController {
  static makeComment (req, res) {
    try {
      const { query: { postId }, body: { comment }, token } = req
      jwt.verify(token, APP_SECRET, (err, authData) => {
        if (err) {
          console.log(err)
          return res.status(403).json({
            message: 'You are not authorized'
          })
        }

        const { user: { id } } = authData
        CommentServices._makeComment(id, postId, comment)
          .then(comment => {
            return res.status(201).json({
              message: 'Commented',
              comment
            })
          })
      })
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: 'Something terrible happened'
      })
    }
  }
}

export default CommentsController
