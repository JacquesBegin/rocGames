const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: Date
  },
  content: {
    type: String
  }
}, {
  collection: 'article'
});

module.exports = mongoose.model('Article', Article);