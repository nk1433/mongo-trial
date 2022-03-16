const { Router } = require('express');
const { welcome, addRecord } = require('../controllers/tours');

const router = Router();

router
	.route('/')
	.get(welcome)
	.post(addRecord);

module.exports = router;
