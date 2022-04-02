const req = require('express/lib/request')
const res = require('express/lib/response')
const Flight = require('../models/flights')

module.exports = {
    index,
    addForm, 
    add,
    show
}

function show(req, res) {
    Flight.findOne({flightNo: req.params.id}, function(err, flight){
        res.render('Flights/show', { flight: flight })
    })
}

function addForm (req, res) {
    res.render('flights/add')
}

function add (req, res) {
    let time = new Date(req.body.departs)
    req.body.departs = time.toString()

    const flight = new Flight(req.body)
    flight.save(function (err) {
        if (err) {
            res.redirect('/flights/add')
        }
        console.log(flight)
        res.redirect('/flights')
    })
       
}



function index (req, res) { 
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights: flights})
    })
}
