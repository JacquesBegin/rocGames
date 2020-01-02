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

//