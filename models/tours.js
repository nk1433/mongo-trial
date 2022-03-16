/*
NOTE: Try to implement a dynamic model create and store the instance of every model.
PROCEDURE: Create a singleton design pattern inputs are model name and scheme store the model in dictonary.
*/
const { createSchema, createModel } = require('../lib/mongooseManager');

const Tour = createModel('Tour', createSchema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	rating: {
		type: Number,
		default: 6,
	},
	price: {
		type: Number,
		required: true,
	},
}));

module.export = Tour;
