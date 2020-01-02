let mongoose = require('mongoose');
// let dbConfig = require('./database/db/dbConfig');
let dbURL = process.env.DB_URL || 'mongodb://localhost:27017/rocGamesDB';

function connectToDB() {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database successfully connected');
  },
    error => {
      console.log('Database could not connect: ' + error)
    }
  );
}

module.exports = {
  connect: connectToDB
}
