let express = require('express');
let router = express.Router();
let destinationsController = require('../controllers/destinations')

//POST /flights/:id/destination
router.post('/flights/:id/destination', destinationsController.add)

module.exports = router;
