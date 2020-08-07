const express = require('express');
const path = require('path');
const app = express();
const db = require('../database/config.js');
// const seed = require('../seed.js');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public/assets')));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

