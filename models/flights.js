const mongoose = require('mongoose')
const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String],
  nowShowing: Boolean
});
	
// Compile the schema into a model and export it
module.exports = mongoose.model('F', flightSchema);
