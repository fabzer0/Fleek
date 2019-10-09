module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define(
    "Follower",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      followId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Follower.associate = models => {
    Follower.belongsTo(models.User, {
      as: "following",
      foreignKey: "userId"
    });
    Follower.belongsTo(models.User, {
      as: "followers",
      foreignKey: "followId"
    });
  };

  return Follower;
};
