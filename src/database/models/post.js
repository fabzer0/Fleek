module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    video: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {})
  Post.associate = models => {
    Post.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      foreignKeyConstraint: true,
      targetKey: 'id',
      onDelete: 'CASCADE'
    })
    Post.hasMany(models.Star, {
      as: 'stars',
      foreignKey: 'postId',
      foreignKeyConstraint: true
    })
    Post.hasMany(models.Comment, {
      as: 'comments',
      foreignKey: 'postId',
      foreignKeyConstraint: true
    })
  }

  return Post
}
