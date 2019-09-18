import models from '../database/models'

const { Post } = models

class PostService {
  static async _createPost (userId, video) {
    const [post] = await Post.findOrCreate({
      where: { video },
      defaults: {
        userId,
        video
      }
    })

    return post
  }

  static async _deletePost (postId) {
    await Post.destroy({
      where: { id: postId }
    })

    return 'Success'
  }
}

export default PostService
