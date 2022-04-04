const mongoose = require('mongoose')
const Schema = mongoose.Schema;
	
const destinationSchema = new Schema({
  location: String 
});

const flightSchema = new Schema({
  airport: String,
  airline: String,
  flightNo: {
    type: String,
  },
  departs: {
    type: Date,
    default: createDate()
  },
  destinations: [destinationSchema]
});

function createDate() {
  let current = new Date() 
  current.setFullYear(current.getFullYear + 1)
  return current
}

// Compile the schema into a model and export it
module.exports = mongoose.model('F', flightSchema);
