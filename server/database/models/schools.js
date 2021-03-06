const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
  rating: Number,
  comment: String,
  submitter: String,
  date: String
});

const schoolSchema = new Schema({
  rating: [{
    academicProgress: Number,
    lowIncome: Number,
    equity: Number,
    testScores: Number,
    average: Number,
    lastUpdated: String
  }],
  name: String,
  district: String,
  studentBody: Number,
  teacherBody: Number,
  studTeachRatio: Number,
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
  reviews: [reviewSchema]
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;

