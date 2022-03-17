const { Router } = require('express');
const {
	getAllTours, addTour, getTour, updateTour, removeTour,
} = require('../controllers/tours');

const router = Router();

router
	.route('/')
	.get(getAllTours)
	.post(addTour);

router
	.route('/:id')
	.get(getTour)
	.patch(updateTour)
	.delete(removeTour);

module.exports = router;
