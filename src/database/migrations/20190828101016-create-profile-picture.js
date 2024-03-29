module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("ProfilePictures", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: "cascade",
          onDelete: "cascade",
          references: { model: "Users", key: "id" }
        },
        image: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(() => {
        console.log("Created ProfilePictures table");
      });
  },
  down: queryInterface => {
    return queryInterface.dropTable("ProfilePictures").then(() => {
      console.log("ProfilePictures table dropped");
    });
  }
};
