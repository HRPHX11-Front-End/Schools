const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/schools_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to mongoDB');
});


module.exports = db;