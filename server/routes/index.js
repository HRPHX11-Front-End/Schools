const express = require('express');
const router = express.Router();
const School = require('../models/schools.js');

router.get('/',  (req, res, next) => {
  School.find().limit(5)
  .then((results) => {
    res.json(results);
  })
});

module.exports = router;