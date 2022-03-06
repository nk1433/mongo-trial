const mongoose = require('mongoose');

const mongooseManager = {
	connect: (url) => mongoose.connect(url).then(() =>
		// eslint-disable-next-line no-console
		console.log('Connected with db.')),
};

module.exports = mongooseManager;
