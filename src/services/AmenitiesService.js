const response = require('../../public/data.json');
const fileUtils = require('../utils/FileUtils');
// const db = require('../dao/NearbyDatabaseManager');
const NewToiletReferenceModel = require('../dao/model/NewToiletReferenceModel');
const ToiletReferenceModel = require('../dao/model/ToiletReferenceModel');

class AmenitiesService {
  // fetch Amenities and Loo Types from db
  static async getAmenitiesList() {
    const amenitesList = [];
    const toiletsList = [];
    await ToiletReferenceModel.findAll().then((results) => {
      for (const list of results) {
        amenitesList.push(list.Amenities);
        toiletsList.push(list.Toilets);
      }
    });
    const toiletResponse = {
      AmenitiesList: [
        {
          Amenities: amenitesList,
        },
        {
          Toilets: toiletsList,
        },
      ],
    };
    return toiletResponse;
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

  // Save new toilet request in db
  static async newToilet(toilet, res) {
    await NewToiletReferenceModel.create({
      Title: toilet.title,
      Location: toilet.location,
      extraInfo: toilet.extraInfo,
    }).then((records) => {
      if (records) {
        console.log('Records Saved Successfully');
        res.send(records);
      } else {
        console.log('Unable to save the Records');
      }
    });
  }

  // delete toilet based on Toilet Name
  static async deleteToilet(loo, res) {
    await ToiletReferenceModel.destroy({
      where: {
        Toilets: loo,
      },
    }).then((results) => {
      if (results === 1) {
        console.log('Records deleted successfully');
        res.status(200).send('Success');
      } else {
        console.log('Unable to delete the records');
      }
    });
  }
}

module.exports = AmenitiesService;
