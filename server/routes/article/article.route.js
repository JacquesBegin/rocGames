const express = require('express');
const articleRoute = express.Router();

let Article = require('../../models/Article');

// Add article
articleRoute.route('/create').post((req, res, next) => {
  Article.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all articles
articleRoute.route('/').get((req, res, next) => {
  Article.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single article
articleRoute.route('/read/:id').get((req, res, next) => {
  Article.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update article
articleRoute.route('/update/:id').put((req, res, next) => {
  Article.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      console.log("Data updated successfullly");
      res.json(data);
    }
  });
});

// Delete article
articleRoute.route('/delete/:id').delete((req, res, next) => {
  Article.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = articleRoute;