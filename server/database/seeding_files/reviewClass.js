

const Review = (comment, rating, date) => {
  this.rating = rating
  this.comment = comment;
  this.submitter = 'Parent';
  this.date = date;
}
// create random variable
let rating = faker.random.number({ min: 1, max: 5 });
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