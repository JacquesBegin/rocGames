const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Profile = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {
  collection: 'profile'
});

module.exports = mongoose.model('Profile', Profile);