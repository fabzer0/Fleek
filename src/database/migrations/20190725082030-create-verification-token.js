module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("VerificationTokens", {
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
        token: {
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
        console.log("Created VerificationTokens table");
        return queryInterface.sequelize.query(`
        CREATE FUNCTION expire_token_func() RETURNS TRIGGER AS $$
          BEGIN
            DELETE FROM "VerificationTokens" WHERE "createdAt" < NOW() - INTERVAL '1 day';
            RETURN NULL;
          END; 
        $$ LANGUAGE plpgsql;
        
        CREATE TRIGGER expire_token 
        AFTER INSERT 
        ON "VerificationTokens"
        FOR EACH ROW 
        EXECUTE FUNCTION expire_token_func();
      `);
      })
      .then(() => {
        console.log("expireToken event created");
      });
  },
  down: queryInterface => {
    return queryInterface
      .dropTable("VerificationTokens")
      .then(() => {
        console.log("VerificationTokens table dropped");
        return queryInterface.sequelize.query(`
          DROP FUNCTION IF EXISTS expire_token_func();
          DROP TRIGGER IF EXISTS expire_token ON "VerificationTokens";
        `);
      })
      .then(() => {
        console.log("expireToken event dropped");
      });
  }
};
