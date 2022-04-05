const req = require('express/lib/request')
const res = require('express/lib/response')
const flights = require('../models/flights')
const Flight = require('../models/flights')

module.exports = {
    add,
    remove
}

function add(req, res) {
    Flight.findOne({flightNo: req.params.id}, function(err, flight){
        if (req.body.arrivals === ''){
            delete req.body.arrivals
        }
        flight.destinations.push(req.body)
        flight.destinations.sort(function(a,b){
            return new Date (a.arrival) - new Date(b.arrival) 
        })
        flight.save(function(err) {
            res.redirect(`/flights/${flight.flightNo}`);
          });
    })
}

function remove(req, res) {
    Flight.findOneAndUpdate(
        {flightNo: req.params.id}, 
        {$pull: {destinations: {arrival: req.params.arrival}}}, 
        function (err){
            res.redirect(`/flights/${req.params.id}`)
        })
}