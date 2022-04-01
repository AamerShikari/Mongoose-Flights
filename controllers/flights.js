const Flight = require('../models/flights')

module.exports = {
    index,
    addForm, 
    add
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

function addForm (req, res) {
    res.render('flights/add')
}

function index (req, res) { 
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights: flights})
    })
}
