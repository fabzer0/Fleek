module.exports = (sequelize, DataTypes) => {
  const Star = sequelize.define('Star', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {})
  Star.associate = models => {
    Star.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      foreignKeyConstraint: true,
      targetKey: 'id',
      onDelete: 'CASCADE'
    })
    Star.belongsTo(models.Post, {
      as: 'post',
      foreignKey: 'postId',
      foreignKeyConstraint: true,
      targetKey: 'id',
      onDelete: 'CASCADE'
    })
  }

  return Star;
}
