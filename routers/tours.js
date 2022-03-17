const { Router } = require('express');
const {
	getAllTours, addRecord, getTour, updateTour,
} = require('../controllers/tours');

const router = Router();

router
	.route('/')
	.get(getAllTours)
	.post(addRecord);

router
	.route('/:id')
	.get(getTour)
	.patch(updateTour);

module.exports = router;
