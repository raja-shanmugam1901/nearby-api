
const response = require('../../public/data.json');
const fileUtils = require('../utils/FileUtils');

class AmenitiesService {
  // fetch external data.json and return to the controller
  static getAmenitiesList() {
    const res = response;
    return res;
  }

  // save new toilet types
  static async addToilet() {
    try {
      const listOfValue = response;
      console.log('json value', listOfValue);
      // stringify JSON Object
      const jsonContent = JSON.stringify(listOfValue);
      console.log('json stringfy', jsonContent);
      await fileUtils.writeJsonData(jsonContent);
      return listOfValue;
    } catch (err) {
      return err;
    }
  }
}
module.exports = AmenitiesService;
