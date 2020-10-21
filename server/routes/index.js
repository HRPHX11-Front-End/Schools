const express = require('express');
const controller = require('../database/controllers');
const router = express.Router();

router.get('/', controller.generateFiveSchools);

module.exports = router;
