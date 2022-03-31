var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights')


// Post /flights/index
router.post('/', flightsController.index);
// GET /flights/add
router.get('/addFlight', flightsController.addForm)

module.exports = router;
