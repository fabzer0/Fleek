module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER 
    },
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
  }, {});
  User.associate = models => {
    User.hasOne(models.VerificationToken, {
      as: 'verificationToken', 
      foreignKey: 'userId',
      foreignKeyConstraint: true,
    })
  };
  return User;
};
