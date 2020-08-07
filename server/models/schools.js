const mongoose = require("mongoose");
const review = require('./schools.js')

// define schema
const Schema = mongoose.Schema;

const schoolSchema = new Schema({

  rating: [{
    academicProgress: Number,
    lowIncome: Number,
    equity: Number,
    testScores: Number,
    average: Number
  }],
  name: String,
  district: String,
  studentBody: Number,
  teacherBody: Number,
  teachStudRatio: String,
  distance: Number,
  address: [{
    street: String,
    city: String,
    state: String,
    zip: String
  }],
  details: [{
    network: String,
    grades: String,
    nearByOrServes: String
  }],
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

const School =  mongoose.model('School', schoolSchema);

module.exports = School;

