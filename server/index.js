const expressStaticGzip = require('express-static-gzip');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const db = require('../database/config.js');
const logger = require('morgan');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public/assets')));

app.use('/dist/bundle.js', expressStaticGzip(__dirname + '../public/assets/dist', {
   enableBrotli: true,
   orderPreference: ['br', 'gz'],
   setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public/assets/dist, max-age=31536000");
   },
}));

app.use('/schools', require('./routes'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

