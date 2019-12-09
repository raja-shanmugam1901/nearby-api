const amentiesService = require('../services/AmenitiesService');
const constant = require('../config/constants');
// send  response to client
const getAmenities = async (req, res) => {
  const err = constant.ERROR;
  const response = await amentiesService.getAmenitiesList();
  if (JSON.stringify(response) === '{}') {
    res.status(500).send(err);
  } else {
    res.send(response);
  }
};

module.exports = {
  getAmenities,
};
