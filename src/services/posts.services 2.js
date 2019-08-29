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

  static async _loadPosts() {

  }

  static async _loadSinglePost(post_id) {
    
  }
}

export default PostService
