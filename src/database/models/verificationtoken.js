module.exports = (sequelize, DataTypes) => {
  const VerificationToken = sequelize.define('VerificationToken', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
  }, {});
  VerificationToken.associate = models => {
    VerificationToken.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      foreignKeyConstraint: true,
      onDelete: 'CASCADE'
    })
  };

  return VerificationToken;
};
