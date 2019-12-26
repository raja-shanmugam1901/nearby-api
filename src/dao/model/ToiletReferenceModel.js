const Sequelize = require('sequelize');
const db = require('../NearbyDatabaseManager');

// define model for toilet
const ToiletReferenceModel = db.sequelize.define('toilet',
  {
    Amenities: {
      type: Sequelize.STRING,
    },
    Toilets: {
      type: Sequelize.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'toilet',
  });
ToiletReferenceModel.removeAttribute('id');
module.exports = ToiletReferenceModel;
