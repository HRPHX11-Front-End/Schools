const express = require('express');
const router = express.Router();
const School = require('../models/schools.js');

router.get('/',  (req, res, next) => {
  School.find().limit(5)
  .exec((err, results) => {
    if(err) {
      console.log(err)
    } else {
      res.json(results)
    }
  })
});

module.exports = router;