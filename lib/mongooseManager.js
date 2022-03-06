const { connect, Schema } = require('mongoose');

const mongooseManager = {
	connect: (url) => connect(url).then(() =>
		// eslint-disable-next-line no-console
		console.log('Connected with db.')),

	createSchema: (schema) => new Schema(schema),
};

module.exports = mongooseManager;
