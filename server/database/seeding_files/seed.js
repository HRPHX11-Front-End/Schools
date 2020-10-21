const path = require('path');
const mongoose = require('mongoose');
const seeder = require('mongoose-seed');
const helperFunctions = require('./helperFunctions.js');

seeder.connect('mongodb://mongo:27017/schools_db', { useUnifiedTopology: true, useNewUrlParser: true }, function () {

  seeder.loadModels([
    path.join(__dirname, '..', 'models', 'schools.js'),
  ])
  seeder.clearModels(['School'], function () {
    const data = helperFunctions.dataGenerator();
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});