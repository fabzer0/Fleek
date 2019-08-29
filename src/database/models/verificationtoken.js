module.exports = (sequelize, DataTypes) => {
  const VerificationToken = sequelize.define('VerificationToken', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})
  VerificationToken.associate = models => {
    VerificationToken.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      foreignKeyConstraint: true,
      onDelete: 'CASCADE'
    })
  }

  return VerificationToken
}
