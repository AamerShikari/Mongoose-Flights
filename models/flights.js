const mongoose = require('mongoose')
const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airport: String,
  airline: String,
  flightNo: String,
  departs: String
});
	
// Compile the schema into a model and export it
module.exports = mongoose.model('F', flightSchema);
