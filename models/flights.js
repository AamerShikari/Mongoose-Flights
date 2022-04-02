const mongoose = require('mongoose')
const Schema = mongoose.Schema;
	
const destinationSchema = new Schema({
  location: String 
});

const flightSchema = new Schema({
  airport: String,
  airline: String,
  flightNo: String,
  departs: String,
  destinations: [destinationSchema]
});
	
// Compile the schema into a model and export it
module.exports = mongoose.model('F', flightSchema);
