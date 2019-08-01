module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER 
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING 
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING 
      },
      password: { allowNull: false, type: Sequelize.STRING },
      country: { allowNull: true, type: Sequelize.STRING },
      city: { allowNull: true, type: Sequelize.STRING },
      isVerified: { type: Sequelize.BOOLEAN },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    })
  },
  down: queryInterface => {
    return queryInterface.dropTable('Users').then(() => {
      console.log('Users table dropped');
    })
  }
};
