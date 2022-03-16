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
