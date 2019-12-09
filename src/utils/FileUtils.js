const fs = require('fs');

class FileUtils {
  static async writeJsonData(jsonContent) {
    return new Promise((resolve, reject) => {
      fs.writeFile('./public/data.json', jsonContent, 'utf8', (err) => {
        if (err) {
          console.log('An error occured while writing JSON Object to File.');
          reject(err);
        }
        console.log('JSON file has been saved.');
        resolve(true);
      });
    });
  }
}

module.exports = FileUtils;
