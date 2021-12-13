let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Pet Model
let petSchema = require('../models/Pet');

// CREATE Pet
router.route('/create-pet').post((req, res, next) => {
  petSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Pets
router.route('/').get((req, res) => {
  petSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Pet
router.route('/edit-pet/:id').get((req, res) => {
  petSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Pet
router.route('/update-pet/:id').put((req, res, next) => {
  petSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Pet updated successfully !')
    }
  })
})

// Delete Pet
router.route('/delete-pet/:id').delete((req, res, next) => {
  petSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;