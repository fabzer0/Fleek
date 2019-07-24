'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { createNamespace } = require('cls-hooked');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../database/config/config')
const db = {};

const namespace = createNamespace('sequelize-transaction');
Sequelize.useCLS(namespace);
const sequelize = new Sequelize(config[env].databaseUrl, config[env]);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) 
    && (file !== basename) 
    && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* DO NOT CHANGE EVER!!! */
module.exports = db;
