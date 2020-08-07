const mongoose = require('mongoose');
const seeder = require('mongoose-seed');
const School = require('./server/models/schools.js');
const Review = require('./server/models/reviews.js');
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
    seeder.populateModels(data, function () {
      var verbs = [' Elementary School', ' High School', ' Middle School', ' Academy'];
var vIdx = Math.floor(Math.random() * 4);

var distanceArr = ['Nearby school', 'Serves this home'];
var networkArr = ['Public', 'Private']
var nIdx = Math.floor(Math.random() * 2);

var gradesArr = ['Preschool to 6', 'Preschool to 8', 'K to 12', '6 to 12', '9 to 12'];
var gIdx = Math.floor(Math.random() * 5);

var schoolData = [
  {
    rating: [{
      academicProgress: faker.random.number({
        'min': 0,
        'max': 10
      }),
      lowIncome: faker.random.number({
        'min': 0,
        'max': 10
      }),
      equity: faker.random.number({
        'min': 0,
        'max': 10
      }),
      testScores: faker.random.number({
        'min': 0,
        'min': 10
      }),
      average: faker.random.number({
        'min': 0,
        'min': 10
      })
    }],

    name: faker.name.findName() + verbs[vIdx],
    district: faker.commerce.productName() + 'School District',
    studentBody: faker.random.number({
      'min': 500,
      'max': 2500
    }),
    teacherBody: faker.random.number({
      'min': 100,
      'max': this.studentBody
    }),
    teachStudRatio: `${faker.random.number({
      'min': 1,
      'max': 10
    })} : ${faker.random.number({
      'min': 1,
      'max': 10
    })}`,
    distance: faker.random.number({
      'min': 0.1,
      'max': 10
    }),
    address: [{
      street: faker.random.number({
        'min': 1000,
        'max': 9999
      }) + faker.address.streetName(),
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
]
for (let i = 0; i < 100; i++) {
  schoolData.push(schoolData);
}

var reviewData = [
  {
    rating: faker.random.number({
      'min': 0,
      'min': 10
    }),
    comment: faker.lorem.paragraphs(),
    submitter: 'Parent',
    date: faker.date.past()
  }
]

for (let j = 0; j < 300; j++) {
  reviewData.push(reviewData);
}




      seeder.disconnect();
    });
  });
});

// recursive fn to get ratio
const getRatio = (teacherBod, studentBod) => {
  for (let i = 2; i <= teacherBod; i++) {
    if ((teacherBod / i) % 1 === 0 && (studentBod / i) % 1 === 0) {
      return getRatio(teacherBod / i, studentBod / i);
    }
  }
  return `${teacherBod}:${studentBod}`;
}


// Data array containing seed data - documents organized by Model

var verbs = [' Elementary School', ' High School', ' Middle School', ' Academy'];
var vIdx = Math.floor(Math.random() * 4);

var distanceArr = ['Nearby school', 'Serves this home'];
var networkArr = ['Public', 'Private']
var nIdx = Math.floor(Math.random() * 2);

var gradesArr = ['Preschool to 6', 'Preschool to 8', 'K to 12', '6 to 12', '9 to 12'];
var gIdx = Math.floor(Math.random() * 5);

var schoolData = [
  {
    rating: [{
      academicProgress: faker.random.number({
        'min': 0,
        'max': 10
      }),
      lowIncome: faker.random.number({
        'min': 0,
        'max': 10
      }),
      equity: faker.random.number({
        'min': 0,
        'max': 10
      }),
      testScores: faker.random.number({
        'min': 0,
        'min': 10
      }),
      average: faker.random.number({
        'min': 0,
        'min': 10
      })
    }],

    name: faker.name.findName() + verbs[vIdx],
    district: faker.commerce.productName() + 'School District',
    studentBody: faker.random.number({
      'min': 500,
      'max': 2500
    }),
    teacherBody: faker.random.number({
      'min': 100,
      'max': this.studentBody
    }),
    teachStudRatio: `${faker.random.number({
      'min': 1,
      'max': 10
    })} : ${faker.random.number({
      'min': 1,
      'max': 10
    })}`,
    distance: faker.random.number({
      'min': 0.1,
      'max': 10
    }),
    address: [{
      street: faker.random.number({
        'min': 1000,
        'max': 9999
      }) + faker.address.streetName(),
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
]
for (let i = 0; i < 100; i++) {
  schoolData.push(schoolData);
}

var reviewData = [
  {
    rating: faker.random.number({
      'min': 0,
      'min': 10
    }),
    comment: faker.lorem.paragraphs(),
    submitter: 'Parent',
    date: faker.date.past()
  }
]

for (let j = 0; j < 300; j++) {
  reviewData.push(reviewData);
}



var data = [
  {
    'model': 'School',
    'documents': schoolData
  },
  {
    'model': 'Review',
    'documents': reviewData
  }
]












