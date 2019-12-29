const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const AmenitiesService = require('../src/services/AmenitiesService');
const fileUtils = require('../src/utils/FileUtils');
const appServer = require('../app');

const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);
describe('AmenitiesService', () => {
  it('tests the type response', async () => {
    sinon.stub(fileUtils, 'writeJsonData').callsFake(
      () => Promise.resolve({ type: 'FeMale' }),
    );
    const documentKey = await fileUtils.writeJsonData();
    expect(documentKey.type).to.equal('FeMale');
    fileUtils.writeJsonData.restore();
  });

  it('should list Amenities and Toilet types on /amenities GET', (done) => {
    chai.request(appServer)
      .get('/amenities')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should add a new toilet details on /toilet POST', (done) => {
    chai.request(appServer)
      .post('/toilet')
      .send({'extraInfo': 'check', 'location': 'brisbane', 'title': 'test'})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        
        res.body.should.have.property('Location');
        res.body.should.have.property('Title');
        res.body.Location.should.equal('brisbane');
        res.body.Title.should.equal('test');
        done();
      });
  });
});
