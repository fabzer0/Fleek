module.exports = (sequelize, DataTypes) => {
  const ProfilePicture = sequelize.define('ProfilePicture', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    image: DataTypes.STRING
  }, {})
  ProfilePicture.associate = models => {
    ProfilePicture.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      foreignKeyConstraint: true
    })
  }

  return ProfilePicture;
}
