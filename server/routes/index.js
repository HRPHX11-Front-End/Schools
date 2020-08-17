const express = require('express');
const router = express.Router();
const School = require('../models/schools.js');

router.get('/', (req, res, next) => {
  School.aggregate([{ $sample: { size: 5 } }])
    .exec((err, results) => {
      res.json(results)
    })
})

module.exports = router;
