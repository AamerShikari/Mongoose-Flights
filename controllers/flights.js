const req = require("express/lib/request");
const res = require("express/lib/response");
const Flight = require("../models/flights");
const Ticket = require('../models/tickets');

module.exports = {
  index,
  addForm,
  add,
  show,
  sortByDate,
};

function sortByDate() {
  Flight.find({})
    .sort({ departs: "asc" })
    .exec(function (err, flights) {
      console.log(flights);
      res.redirect("flights/index", { flights: flights });
    });
}

function show(req, res) {
  Flight.findOne({ flightNo: req.params.id })
  .populate('tickets')
  .exec(function(err, flight){
    
    res.render('flights/show', {flight: flight})
  });
}

function addForm(req, res) {
  res.render("flights/add");
}

function add(req, res) {
  if (req.body.departs === "") {
    delete req.body.departs;
  }

  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) {
      res.redirect("/flights/add");
    }
    console.log(flight);
    res.redirect("/flights");
  });
}

function index(req, res) {
  Flight.find({})
    .sort({ departs: "asc" })
    .exec(function (err, flights) {
      res.render("flights/index", { flights: flights });
    });
}
