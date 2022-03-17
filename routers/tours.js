const { Router } = require('express');
const { getAllTours, addRecord } = require('../controllers/tours');

const router = Router();

router
	.route('/')
	.get(getAllTours)
	.post(addRecord);

module.exports = router;
