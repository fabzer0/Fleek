module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
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
      bio: Sequelize.TEXT,
      phone: {
        unique: true,
        type: Sequelize.STRING
      },
      gender: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      console.log('Created Profiles table')
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('Profiles')
      .then(() => {
        console.log('Profiles table dropped')
      })
  }
}
