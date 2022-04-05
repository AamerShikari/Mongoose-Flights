let express = require('express');
let router = express.Router();
let destinationsController = require('../controllers/destinations')

//POST /flights/:id/destination
router.post('/flights/:id/destination', destinationsController.add)
//DELETE /flights/:id/:arrival
router.delete('/flights/:id/:arrival', destinationsController.remove)

module.exports = router;
