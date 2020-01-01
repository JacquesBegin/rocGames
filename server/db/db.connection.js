let mongoose = require('mongoose');

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