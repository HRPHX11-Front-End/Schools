const faker = require('faker');

const School = (gradesServed = null, schoolType = null, distance = null, network = null) => {
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

const getRandomElement = (array) => {
  const randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
}

module.exports.dataGenerator = () => {
  // create random arrs

  // array to hold all school docs
  var schoolRecords = [];

  // 100 school data documents
  for (let i = 0; i < 100; i++) {

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
  var random = Math.floor(Math.random() * 10 + 1);
  // array to hold all reviews
  var reviewRecords = [];
  [...Array(random)].map((item) => {
    reviewRecords.push({
      rating: faker.random.number({ min: 1, max: 5 }),
      comment: reviewGenerator(),
      submitter: 'Parent',
      date: getDate()
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
  return Math.floor(num1 / num2);
}

// function to get average of n numbers
const getAvg = (...numbers) => {
  const avg = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0);
  return Math.floor(avg / numbers.length);
}


// function to get a random date
const getDate = () => {
  // create random dates for past 20 years
  const yearRange = [...Array(20)].map((year, index) => {
    return 2000 + index;
  });
  const dayRange = [...Array(31)].map((day, index) => {
    return 1 + index;
  });
  const monthRange = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  var randomDay = Math.floor(Math.random() * dayRange.length);
  var randomMonth = Math.floor(Math.random() * monthRange.length);
  var randomYear = Math.floor(Math.random() * yearRange.length);
  var date = `${monthRange[randomMonth]} ${dayRange[randomDay]}, ${yearRange[randomYear]}`;
  return date;
}

// fn to randomly generate reviews
const reviewGenerator = () => {
  // array for reviews
  var review = [];

  var sentences =
    ['Disadvantaged students at this school are performing far better than other students in the state, and this school is successfully closing the achievement gap. ', 'I am very satisfied of my experience in this school! Teachers are great and staffs are awesome! ', 'It\'s been great, better than most schools! ', 'Such a lack of leadership!! Who is the manager at this school?? Who is in charge of informing the parents??? ', 'Does the supervisor know any accurate information??? ', 'We\'ve been so happy here! The school has a close, community feel to it, and the setting up in Debs Park is just beautiful. ', 'The kids spend lots of time outside, including in the edible garden. ', 'The teachers and staff are so welcoming and helpful, and Principal Narvaez greets the students at the gate by name every morning.', 'We\'re excited to send our youngest here, too, once he\'s old enough! ', 'Yes my daughter was accepted, it’s a good school. Well, that’s what she said! ', 'its a great school I recommend it to all the 5th graders. ', 'The teachers all care for what you have to say and want to learn in what way the try there best to succeed at making the students happy with learning. ', 'My name Jeff. ', 'My name is michael, and i like to party. ', 'I can\'t say enough good about this school. ', '60% of the time, my kid goes here 100% of the time. ', 'Mr. Cooper is the best teacher I have ever had!!! ', 'Safe and clean. ', 'The teachers are first rate and they care. ', 'Great facilities with programs that challenge your children. ', 'We have been at this school for two years and are absolutely happy and impressed. ', 'The teachers are outstanding, the principal is amazing (she knows every student\'s name!). ', 'It is a smaller school which is ideal for us - lots of individual attention and you get to know everyone. ']

  var random = Math.floor(Math.random() * 6 + 2);
  [...Array(random)].map((item) => {
    var randomIdx = Math.floor(Math.random() * sentences.length);
    review.push(sentences[randomIdx]);
  })
  return review.join('');
}

