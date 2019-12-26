const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createMiddleware = require('swagger-express-middleware');

const db = require('./src/dao/NearbyDatabaseManager');
const constant = require('./src/config/constants');

const app = express();

// creating Middeware
createMiddleware('api.yml', app, (err, middleware) => {
// configure app to use bodyParser()
  app.use(
    middleware.files(
      {
        caseSensitive: false,
        strict: false,
      },
      {
        apiPath: '/swagger/api',
        rawFilesPath: '/swagger/api',
      },
    ),
  );
  app.use(bodyParser.json());
  app.use(cors());
  app.use(middleware.metadata());
  app.use(middleware.parseRequest());
  app.use(middleware.validateRequest());

  const port = constant.PORT;
  const origin = constant.URL;
  app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.header('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, authorization, access-token',
    );

    next();
  });
  // Routes for the API
  app.listen(port, async () => {
    try {
      await db.sequelize;
      console.log(`nearby-api app listening on port ${port}!`);
    } catch (error) {
      console.log('Error while starting the app', error);
    }
  });

  const Routes = require('./src/routes/Routes');
  const router = express.Router();
  Routes.createRoutes(router);
  app.use('/', router);
});

module.exports = app;
