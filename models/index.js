const { createSchema, createModel } = require('../lib/mongooseManager');

const modelManager = ({ schema, name }) => {
	const models = {};
	const addModel = () => {
		models[name] = createModel(name, createSchema(schema));
	};

	models[name] || addModel();

	return models;
};

module.exports = modelManager;
