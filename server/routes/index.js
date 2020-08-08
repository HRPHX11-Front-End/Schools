const express = require('express');
const router = express.Router();
const School = require('../models/schools.js');
// const school_controller = require('../controllers/schoolController.js')

router.get('/',  (req, res, next) => {
  School.findOne()
  .then((results) => {
    res.json(results)
  })
});

module.exports = router;