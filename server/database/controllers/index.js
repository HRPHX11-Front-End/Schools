const School = require('../models/schools.js');

exports.generateFiveSchools = (req, res) => {
  School.aggregate([{ $sample: { size: 5 } }]).exec()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};