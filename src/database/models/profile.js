module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      phone: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: true
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {}
  );
  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
      foreignKeyConstraint: true,
      onDelete: "CASCADE"
    });
  };

  return Profile;
};
