const Flight = require('../models/flights')
const Ticket = require('../models/tickets')

module.exports = {
    create,
    addPage
}

function addPage(req, res) {
    res.render('flights/addTicket')
}

function create(req, res) {
    console.log(req.body)
    Flight.findOne({flightNo: req.body.flightNo}, (err, flight) =>{
        console.log(flight)
        Ticket.create(req.body, function(err, ticket){
            console.log(ticket)
            flight.tickets.push(ticket._id)
            flight.save(function(err){
                res.redirect(`/flights/${flight.flightNo}`)
            })
        })
    })
}

