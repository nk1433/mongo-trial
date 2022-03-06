const { connect, Schema } = require('mongoose');

const mongooseManager = {
	connectDb: (url) => connect(url).then(() =>
		// eslint-disable-next-line no-console
		console.log('Connected with db.')),

	createSchema: (schema) => new Schema(schema),

	createModelInstance: (Model, data) => new Model(data),
};

module.exports = mongooseManager;
