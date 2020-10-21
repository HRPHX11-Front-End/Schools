const faker = require('faker');

const School = (gradesServed, schoolType, distance, network, academicProgress, lowIncome, equity, testScores) => {
  this.gradesServed = gradesServed;
  this.schoolType = schoolType;
  this.distance = distance;
  this.network = network
  this.academicProgress = faker.random.number({ min: 0, max: 10 });
  this.lowIncome = faker.random.number({ min: 0, max: 10 });
  this.equity = faker.random.number({ min: 0, max: 10 });
  this.testScores = faker.random.number({ min: 0, max: 10 });
}

School.prototype.generateSchoolRecord = function () {
  const gradesServed = ['Preschool to 6', 'Preschool to 8', 'K to 12', '6 to 12', '9 to 12'];
  const schoolType = [' Elementary School', ' High School', ' Middle School', ' Academy'];
  const distance = ['Nearby school', 'Serves this home'];
  const network = ['Public', 'Private'];
  this.gradesServed = getRandomElement(gradesServed);
  this.schoolType = getRandomElement(schoolType);
  this.distance = getRandomElement(distance);
  this.network = getRandomElement(network);
  return {
    rating: [{
      academicProgress: this.academicProgress,
      lowIncome: this.lowIncome,
      equity: this.equity,
      testScores: this.testScores,
      average: getAvg(this.academicProgress, this.lowIncome, this.equity, this.testScores),
      lastUpdated: getDate(),
    }],
    name: faker.name.findName() + this.gradesServed,
    district: faker.address.streetName() + ' School District',
    studentBody: faker.random.number({ min: 500, max: 2500 }),
    teacherBody: faker.random.number({ min: 100, max: 500 }),
    studTeachRatio: getRatio(faker.random.number({ min: 100, max: 150 }), faker.random.number({ min: 20, max: 80 })),
    distance: faker.random.number({ min: 0.1, max: 10 }),
    address: [{
      street: faker.random.number({ min: 1000, max: 9999 }) + ' ' + faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode()
    }],
    details: [{
      network: this.network,
      grades: this.gradesServed,
      nearByOrServes: this.distance
    }],
    reviews: reviews(),
  }
}

School.prototype.generateOneHunderedRecords = function () {
  return [...Array(100)].map((number, index) => {
    return School.prototype.generateSchoolRecord();
  })
}

var data = [{
  'model': 'School',
  'documents': School.prototype.generateOneHunderedRecords()
}]
return data;
}



