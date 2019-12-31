const Sequelize = require('sequelize');
const Constants = require('../config/constants');

// DB Creation
const db = {};
const sequelize = new Sequelize(Constants.DB_NAME,
  Constants.DB_USERNAME,
  Constants.DB_PASSWORD, {
    host: Constants.DB_HOST,
    dialect: 'mysql',
    pool: {
      min: 4,
      max: 12,
      acquire: 30000,
      idle: 10000,
    },
  });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
