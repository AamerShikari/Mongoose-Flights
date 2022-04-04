const mongoose = require('mongoose')
const Schema = mongoose.Schema;
	
const ticketSchema = new Schema({
    seat: String,
    price: Number,
    flight: { type: Schema.Types.ObjectId, ref: 'Flight'}
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Ticket', ticketSchema);
