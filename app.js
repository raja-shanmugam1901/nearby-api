const createMiddleware = require('swagger-express-middleware');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Routes = require('./src/routes/Routes');

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
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(middleware.metadata());
  app.use(middleware.parseRequest());
  app.use(middleware.validateRequest());

  const port = 3000;

  app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, authorization, access-token',
    );
    app.use((error) => {
      res.status(error.status || 500).send(JSON.stringify(error.message));
    });
    next();
  });
  // Routes for the API
  const router = express.Router();
  Routes.createRoutes(router);
  app.use('/', router);

  app.listen(port, () => {
    console.log(`nearby-api app listening on port ${port}!`);
  });
});

module.exports = app;
