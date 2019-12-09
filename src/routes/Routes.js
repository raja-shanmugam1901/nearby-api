class Routes {
  static createRoutes(router) {
    const AmenitiesController = require('../controller/AmenitiesController');
    const ToiletController = require('../controller/ToiletController');
    router.get('/amenities', (req, res) => {
      AmenitiesController.getAmenities(req, res);
    });
    router.post('/toilet', (req, res) => {
      ToiletController.addToilet(req, res);
    });
  }
}
module.exports = Routes;
