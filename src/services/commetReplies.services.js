import models from '../database/models'

const { CommentReply } = models 

class CommentRepliesServices {
  static async _replyToComent (userId, commentId, comment) {
    const repliedComment = await CommentReply.create({
      userId,
      commentId,
      comment
    })

    return repliedComment.dataValues
  }
}

export default CommentRepliesServices
