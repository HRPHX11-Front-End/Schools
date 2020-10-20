const expressStaticGzip = require('express-static-gzip');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const db = require('../database/config.js');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public', 'dist')));

app.use('/dist/bundle.js', expressStaticGzip(__dirname + '../public/dist', {
   enableBrotli: true,
   orderPreference: ['br', 'gz'],
   setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public/dist, max-age=31536000");
   },
}));

app.use('/schools', require('./routes'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});