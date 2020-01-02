const express = require('express');
const profileRoute = express.Router();

let Profile = require('../../models/Profile');

// Add profile
profileRoute.route('/create').post((req, res, next) => {
  Profile.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all profiles
profileRoute.route('/').get((req, res, next) => {
  Profile.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single profile
profileRoute.route('/read/:id').get((req, res, next) => {
  Profile.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update profile
profileRoute.route('/update/:id').put((req, res, next) => {
  Profile.findByIdAndUpdate(req.params.id, {
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

// Delete profile
profileRoute.route('/delete/:id').delete((req, res, next) => {
  Profile.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = profileRoute;