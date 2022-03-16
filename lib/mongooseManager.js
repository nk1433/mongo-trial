const { connect, Schema, model } = require('mongoose');
const { peek } = require('@laufire/utils/debug');

const mongooseManager = {
	connectDb: (url) => connect(url).then(() =>
		peek('Connected with db.')),

	createSchema: (schema) => new Schema(schema),

	createModel: (name, schema) => model(name, schema),

	createModelInstance: (Model, data) => new Model(data),
};

module.exports = mongooseManager;
