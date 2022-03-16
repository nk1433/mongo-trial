const { Router } = require('express');
const { welcome } = require('../controllers/tours');

const router = Router();

router.route('/').get(welcome);

module.exports = router;
