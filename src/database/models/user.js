module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      country: {
        allowNull: true,
        type: DataTypes.STRING
      },
      city: {
        allowNull: true,
        type: DataTypes.STRING
      },
      isVerified: {
        type: DataTypes.BOOLEAN
      }
    },
    {}
  );
  User.associate = models => {
    User.hasOne(models.VerificationToken, {
      as: "verificationToken",
      foreignKey: "userId",
      foreignKeyConstraint: true
    });
    User.hasOne(models.Profile, {
      as: "profile",
      foreignKey: "userId",
      foreignKeyConstraint: true
    });
    User.hasMany(models.Post, {
      as: "posts",
      foreignKey: "userId",
      foreignKeyConstraint: true
    });
    User.hasMany(models.Follower, {
      as: "following",
      foreignKey: "userId"
    });
    User.hasMany(models.Follower, {
      as: "followers",
      foreignKey: "followId"
    });
    User.hasMany(models.Star, {
      as: "stars",
      foreignKey: "userId",
      foreignKeyConstraint: true
    });
    User.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "userId",
      foreignKeyConstraint: true
    });
    User.hasMany(models.CommentReply, {
      as: "commentsReplied",
      foreignKey: "userId",
      foreignKeyConstraint: true
    });
    User.hasOne(models.ProfilePicture, {
      as: "profPic",
      foreignKey: "userId",
      foreignKeyConstraint: true
    });
  };

  return User;
};
