const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/schools_db', {useNewUrlParser: true,
useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoDB');
});


module.exports = db;