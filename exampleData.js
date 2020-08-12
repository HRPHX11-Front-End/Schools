const faker = require('faker');

// function to generate 300 fake reviews and 100 fake houses with random data points
module.exports.dataGenerator = () => {
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
      teachStudRatio: getRatio(faker.random.number({ min: 0, max: 50 }), faker.random.number({ min: 100, max: 150 })),
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
      reviews: reviews(),
    }
    schoolRecords.push(schoolData);
  }




  var data = [{
    'model': 'School',
    'documents': schoolRecords
  }]
  return data;
}

// fn to obtain reviews
const reviews = () => {
  // create random variable
  var random = Math.floor(Math.random() * 11);
  // array to hold all reviews
  var reviewRecords = [];
  [...Array(random)].map((item) => {
    reviewRecords.push({
      rating: faker.random.number({ min: 0, max: 5 }),
      comment: faker.lorem.paragraphs(),
      submitter: 'Parent',
      date: faker.date.past()
    })
  })
  return reviewRecords;
}

// recursive fn to get ratio (helper fn)
const getRatio = (num1, num2) => {
  for (let i = 2; i <= num1; i++) {
    if ((num1 / i) % 1 === 0 && (num2 / i) % 1 === 0) {
      return getRatio(num1 / i, num2 / i);
    }
  }
  return `${num1}:${num2}`;
}

