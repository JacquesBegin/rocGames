let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

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