const amentiesService = require('../services/AmenitiesService');
const constant = require('../config/constants');
const response = require('../../public/data.json');

// send  response to client
const addToilet = async (req, res) => {
  const amenitiesList = response.AmenitiesList;
  const toilet = req.body;
  const error = constant.TYPE;

  if (toilet.type.length === 0) {
    res.status(500).send(error);
  } else {
    amenitiesList.forEach((amenities) => {
      if (amenities.toilets) {
        for (const toiletName of toilet.type) {
          amenities.toilets.push(toiletName);
        }
      }
    });
  }
  const resp = await amentiesService.addToilet();
  res.send(resp);
};

module.exports = {
  addToilet,
};
