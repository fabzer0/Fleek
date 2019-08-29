module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: { model: 'Users', key: 'id' }
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: { model: 'Posts', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      console.log('Created Stars table')
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('Stars')
      .then(() => {
        console.log('Stars table dropped')
      })
  }
}
