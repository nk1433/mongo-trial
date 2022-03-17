const { Router } = require('express');
const {
	getAllTours, addRecord, getTour, updateTour, removeTour,
} = require('../controllers/tours');

const router = Router();

router
	.route('/')
	.get(getAllTours)
	.post(addRecord);

router
	.route('/:id')
	.get(getTour)
	.patch(updateTour)
	.delete(removeTour);

module.exports = router;
