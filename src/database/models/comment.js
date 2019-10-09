module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
      foreignKeyConstraint: true,
      targetKey: "id",
      onDelete: "CASCADE"
    });
    Comment.belongsTo(models.Post, {
      as: "post",
      foreignKey: "postId",
      foreignKeyConstraint: true,
      targetKey: "id",
      onDelete: "CASCADE"
    });
    Comment.hasMany(models.CommentReply, {
      as: "commentsReplied",
      foreignKey: "commentId",
      foreignKeyConstraint: true
    });
  };

  return Comment;
};
