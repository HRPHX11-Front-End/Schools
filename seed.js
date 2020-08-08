const mongoose = require('mongoose');
const seeder = require('mongoose-seed');
const exampleData = require('./exampleData.js');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/schools_db', { useUnifiedTopology: true }, function () {

  // Load Mongoose models
  seeder.loadModels([
    './server/models/schools.js',
    './server/models/reviews.js',
  ])
  // Clear specified collections
  seeder.clearModels(['School', 'Review'], function () {
    // Callback to populate DB once collections have been cleared
    var data = exampleData.dataGenerator();
    seeder.populateModels(data, function () {
      // Data array containing seed data - documents organized by Model
      seeder.disconnect();
    });
  });
});








