module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Comments", {
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
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: "cascade",
          onDelete: "cascade",
          references: { model: "Posts", key: "id" }
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
      })
      .then(() => {
        console.log("Created Comments table");
      });
  },

  down: queryInterface => {
    return queryInterface.dropTable("Comments").then(() => {
      console.log("Comments table dropped");
    });
  }
};
