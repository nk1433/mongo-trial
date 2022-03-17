const { Router } = require('express');
const { addRecord } = require('../controllers/tours');

const router = Router();

router
	.route('/')
	.post(addRecord);

module.exports = router;
