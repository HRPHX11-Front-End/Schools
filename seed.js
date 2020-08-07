const mongoose = require('mongoose');
const seeder = require('mongoose-seed');
const faker = require('faker');

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
    data = randomData();
    seeder.populateModels(data, function () {
      // Data array containing seed data - documents organized by Model
      seeder.disconnect();
    });
  });
});

// function to generate 300 fake reviews and 100 fake houses with random data points
var randomData = () => {
  // create random arrs
  var verbs = [' Elementary School', ' High School', ' Middle School', ' Academy'];
  var vIdx = Math.floor(Math.random() * 4);

  var distanceArr = ['Nearby school', 'Serves this home'];
  var networkArr = ['Public', 'Private']
  var nIdx = Math.floor(Math.random() * 2);

  var gradesArr = ['Preschool to 6', 'Preschool to 8', 'K to 12', '6 to 12', '9 to 12'];
  var gIdx = Math.floor(Math.random() * 5);
  // array to hold all school docs
  var schoolRecords = [];

  // array to hold all reviews
  var reviewRecords = [];

  // 100 school data documents
  for (let i = 0; i < 100; i++) {
    var schoolData = {
      rating: [{
        academicProgress: faker.random.number({ min: 0, max: 10 }),
        lowIncome: faker.random.number({ min: 0, max: 10 }),
        equity: faker.random.number({ min: 0, max: 10 }),
        testScores: faker.random.number({ min: 0, max: 10 }),
        average: faker.random.number({ min: 0, max: 10 })
      }],
      name: faker.name.findName() + verbs[vIdx],
      district: faker.address.streetName() + ' School District',
      studentBody: faker.random.number({ min: 500, max: 2500 }),
      teacherBody: faker.random.number({ min: 100, max: 500 }),
      teachStudRatio: faker.random.number({ min: 1, max: 10 }) + ':' + faker.random.number({ min: 1, max: 10 }),
      distance: faker.random.number({ min: 0.1, max: 10 }),
      address: [{
        street: faker.random.number({ min: 1000, max: 9999 }) + ' ' + faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zip: faker.address.zipCode()
      }],
      details: [{
        network: networkArr[nIdx],
        grades: gradesArr[gIdx],
        nearByOrServes: distanceArr[nIdx]
      }],
    }
    schoolRecords.push(schoolData);
  }
  // 300 reviews
  for (let j = 0; j < 300; j++) {
    var reviewData =
    {
      rating: faker.random.number({ min: 0, max: 10 }),
      comment: faker.lorem.paragraphs(),
      submitter: 'Parent',
      date: faker.date.past()
    }
    reviewRecords.push(reviewData);
  }
  // set data variable
  var data = [{
    'model': 'School',
    'documents': schoolRecords
  },
  {
    'model': 'Review',
    'documents': reviewRecords
  }]
  return data;
}

// recursive fn to get ratio (helper fn)
// const getRatio = (teacherBod, studentBod) => {
//   for (let i = 2; i <= teacherBod; i++) {
//     if ((teacherBod / i) % 1 === 0 && (studentBod / i) % 1 === 0) {
//       return getRatio(teacherBod / i, studentBod / i);
//     }
//   }
//   return `${teacherBod}:${studentBod}`;
// }







