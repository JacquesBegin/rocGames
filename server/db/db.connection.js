let mongoose = require('mongoose');
let dbConfig = require('./database/db/dbConfig');

function connectToDB() {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
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
  connect: connectToDB()
}
