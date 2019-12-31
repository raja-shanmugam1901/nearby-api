# nearby-api
This Api is integrated with nearby-ui and used to send response to the client based on the router request.

## Framework, Languages & tools
Framework: Express , Sequelize
Libraries: swagger-express-middleware
Lint: Airbnb
Database: MySql
Unit Testing Framework: Mocha 
Assertion Library : Chai

## Project setup
npm install

## start dev server
node app.js

## Run your unit tests
npm run test

## Lints and fixes files
npm run lint

## To run the application ,please find the db_scripts folder for database details , configure mysql db in local and provide correct connection details in src/dao/NearbyDatabaseManager.js class.