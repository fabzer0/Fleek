module.exports = (sequelize, DataTypes) => {
  const CommentReply = sequelize.define('CommentReply', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})
  CommentReply.associate = models => {
    CommentReply.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      foreignKeyConstraint: true,
      targetKey: 'id',
      onDelete: 'CASCADE'
    })
    CommentReply.belongsTo(models.Comment, {
      as: 'parentComment',
      foreignKey: 'commentId',
      foreignKeyConstraint: true,
      targetKey: 'id',
      onDelete: 'CASCADE'
    })
  }

  return CommentReply
}
