const Flights = require('../models/flights')

module.exports = {
    index,
    addForm, 
    add
}

function add (req, res) {
    console.log(req.body)
}

function addForm (req, res) {
    console.log("your going to me!")
    res.render('flights/add')
}

function index (req, res) { 
    Flights.find({}, function(err, flights){
        res.render('flights/index', {flights: flights})
    })
}