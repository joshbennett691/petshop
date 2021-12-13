const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let petSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  breed: {
    type: String
  },
  species: {
      type: String
  },
  colour: {
      type: String
  }

}, {
    collection: 'pets'
  })

module.exports = mongoose.model('Pet', petSchema)