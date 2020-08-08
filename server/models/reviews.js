const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
  school: {type: Schema.Types.ObjectId, ref: 'School'},
  rating: Number,
  comment: String,
  submitter: String,
  date: Date

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
