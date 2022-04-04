const req = require('express/lib/request')
const res = require('express/lib/response')
const Flight = require('../models/flights')

module.exports = {
    add
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