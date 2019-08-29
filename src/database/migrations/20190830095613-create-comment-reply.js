module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CommentReplies', {
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
      commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: { model: 'Comments', key: 'id' }
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
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
      console.log('Created CommentReplies table')
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('CommentReplies')
      .then(() => {
        console.log('CommentReplies table dropped')
      })
  }
}
