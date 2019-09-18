module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    bio: DataTypes.TEXT,
    phone: {
      unique: true,
      type: DataTypes.STRING
    },
    gender: DataTypes.STRING
  }, {})
  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      foreignKeyConstraint: true,
      onDelete: 'CASCADE'
    })
  }

  return Profile
}
