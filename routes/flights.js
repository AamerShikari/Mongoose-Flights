var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights')


// POST /flights/index
router.post('/', flightsController.add);
// GET /flights/index
router.get('/', flightsController.index)
// GET /flights/index/sortByDate
router.get('/sortByDate', flightsController.sortByDate)
// GET /flights/add
router.get('/addFlight', flightsController.addForm)
// GET /flights/:id
router.get('/:id', flightsController.show);



module.exports = router;
