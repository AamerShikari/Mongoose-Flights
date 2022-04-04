const mongoose = require('mongoose')
const Schema = mongoose.Schema;
	
const destinationSchema = new Schema({
  airport: String, 
  arrival: {
    type: Date,
    default: createDate()
  } 
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
  destinations: [destinationSchema],
  tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
});

function createDate() {
  let current = new Date() 
  current.setDate(current.getDate() + 365)
  return current
}

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
