const Sequelize = require('sequelize');
const { env } = require('../config')
const dbConfig = require('../config/database')[env]

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
