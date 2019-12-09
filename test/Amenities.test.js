const chai = require('chai');
const sinon = require('sinon');

const AmenitiesService = require('../src/services/AmenitiesService');
const fileUtils = require('../src/utils/FileUtils');

const { expect } = chai;

describe('AmenitiesService', () => {
  it('tests the response fetch', async () => {
    const jsonResponse = require('../public/data.json');
    const response = await AmenitiesService.getAmenitiesList();
    expect(response).to.eq(jsonResponse);
  });
  it('tests the type response', async () => {
    sinon.stub(fileUtils, 'writeJsonData').callsFake(
      () => Promise.resolve({ type: 'FeMale' }),
    );
    const documentKey = await fileUtils.writeJsonData();
    expect(documentKey.type).to.equal('FeMale');
    fileUtils.writeJsonData.restore();
  });
});
