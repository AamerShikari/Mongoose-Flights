var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights')
const ticketsController = require('../controllers/tickets')

// POST /flights/index
router.post('/', flightsController.add);
// GET /flights/index
router.get('/', flightsController.index)
// GET /flights/index/sortByDate
router.get('/sortByDate', flightsController.sortByDate)
// GET /flights/addFlight
router.get('/addFlight', flightsController.addForm)
// GET /flights/addTicket
router.get('/addTicket', ticketsController.addPage)
// GET /flights/:id
router.get('/:id', flightsController.show);



module.exports = router;
