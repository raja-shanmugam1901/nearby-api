const Sequelize = require('sequelize');
const db = require('../NearbyDatabaseManager');

// define model for newtoilet
const NewToiletReferenceModel = db.sequelize.define('newtoilets', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  Title: { type: Sequelize.STRING },
  Location: { type: Sequelize.STRING },
});
module.exports = NewToiletReferenceModel;
