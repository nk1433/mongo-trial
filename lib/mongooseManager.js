const { connect, Schema, model } = require('mongoose');

const mongooseManager = {
	connectDb: (url) => connect(url).then(() =>
		// eslint-disable-next-line no-console
		console.log('Connected with db.')),

	createSchema: (schema) => new Schema(schema),

	createModel: (name, schema) => model(name, schema),

	createModelInstance: (Model, data) => new Model(data),
};

module.exports = mongooseManager;
