const express = require('express')
const router = express.Router();
const ticketsController = require('../controllers/tickets')

//POST /flights/:id/tickets
router.post('/flights/addTicket', ticketsController.create)

module.exports = router;