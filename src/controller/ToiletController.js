const amentiesService = require('../services/AmenitiesService');
const constant = require('../config/constants');
const response = require('../../public/data.json');

// send  response to client
const addToilet = async (req, res) => {
  const amenitiesList = response.AmenitiesList;
  if (Object.keys(req.body).length === 0) {
    res.status(204).send('Request body is empty');
  } else {
    const toilet = req.body;
    const error = constant.TYPE;
    const resp = await amentiesService.newToilet(toilet, res);
    if (toilet.extraInfo) {
      res.status(500).send(error);
    } else {
      amenitiesList.forEach((amenities) => {
        if (amenities.toilets) {
          amenities.toilets.push(toilet.extraInfo);
        }
      });
    }
    amentiesService.addToilet();
    res.send(resp);
  }
};

// delete toilet based on id
const deleteToilet = async (req, res) => {
  const { loo } = req.headers;
  const resp = await amentiesService.deleteToilet(loo, res);
  res.send(resp);
};
module.exports = {
  addToilet,
  deleteToilet,
};
