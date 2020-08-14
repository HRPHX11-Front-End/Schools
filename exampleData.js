const faker = require('faker');
const txtgen = require('txtgen');


// function to generate 300 fake reviews and 100 fake houses with random data points
module.exports.dataGenerator = () => {
  // create random arrs
  var gradesArr = ['Preschool to 6', 'Preschool to 8', 'K to 12', '6 to 12', '9 to 12'];
  var verbs = [' Elementary School', ' High School', ' Middle School', ' Academy'];
  var distanceArr = ['Nearby school', 'Serves this home'];
  var networkArr = ['Public', 'Private']
  // array to hold all school docs
  var schoolRecords = [];



  // 100 school data documents
  for (let i = 0; i < 100; i++) {
    var date = faker.date.past(1, new Date(2020, 0, 1))
    // randon idx for verbs
    var vIdx = Math.floor(Math.random() * 4);
    // randon idx for networkArr
    var nIdx = Math.floor(Math.random() * 2);
    // randon idx for gradesArr
    var gIdx = Math.floor(Math.random() * 5);

    var schoolData = {
      rating: [{
        academicProgress: faker.random.number({ min: 0, max: 10 }),
        lowIncome: faker.random.number({ min: 0, max: 10 }),
        equity: faker.random.number({ min: 0, max: 10 }),
        testScores: faker.random.number({ min: 0, max: 10 }),
        average: faker.random.number({ min: 0, max: 10 }),
        lastUpdated: date
      }],
      name: faker.name.findName() + verbs[vIdx],
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
  // format random dat
  var date = faker.date.past(20, new Date(2020, 0, 1))
  // create random variable
  var random = Math.floor(Math.random() * 10 + 1);
  // array to hold all reviews
  var reviewRecords = [];
  [...Array(random)].map((item) => {
    reviewRecords.push({
      rating: faker.random.number({ min: 1, max: 5 }),
      comment: reviewGenerator(),
      submitter: 'Parent',
      date: date
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

// fn to randomly generate reviews

const reviewGenerator = () => {
  // array for reviews
  var review = [];
  var sentences =
    ['Disadvantaged students at this school are performing far better than other students in the state, and this school is successfully closing the achievement gap. ', 'I am very satisfied of my experience in this school! Teachers are great and staffs are awesome! ', 'It\'s been great, better than most schools! ', 'Such a lack of leadership!! Who is the manager at this school?? Who is in charge of informing the parents??? ', 'Does the supervisor know any accurate information??? ', 'We\'ve been so happy here! The school has a close, community feel to it, and the setting up in Debs Park is just beautiful. ', 'The kids spend lots of time outside, including in the edible garden. ', 'The teachers and staff are so welcoming and helpful, and Principal Narvaez greets the students at the gate by name every morning.', 'We\'re excited to send our youngest here, too, once he\'s old enough! ', 'Yes my daughter was accepted, it’s a good school. Well, that’s what she said! ', 'its a great school I recommend it to all the 5th graders. ', 'The teachers all care for what you have to say and want to learn in what way the try there best to succeed at making the students happy with learning. ', 'My name Jeff. ', 'My name is michael, and i like to party. ', 'I can\'t say enough good about this school. ', '60% of the time, my kid goes here 100% of the time. ', 'Mr. Cooper is the best teacher I have ever had!!! ']

  var random = Math.floor(Math.random() * 6 + 2);
  [...Array(random)].map((item) => {
    var randomIdx = Math.floor(Math.random() * sentences.length);
    review.push(sentences[randomIdx]);
  })
  return review.join('');
}