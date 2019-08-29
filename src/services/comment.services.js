import models from '../database/models'

const { Comment } = models

class CommentServices {
  static async _makeComment (userId, postId, comment) {
    const userComment = await Comment.create({
      userId,
      postId,
      comment
    })

    return userComment.dataValues
  }
}

export default CommentServices
