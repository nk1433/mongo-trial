const modelManager = require('../models');
const { chain, transform } = require('../lib/helpers');

const tourController = (() => {
	const { Tour } = modelManager({
		name: 'Tour',
		schema: {
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
		},
	});

	return {
		// TODO: Abstract common apis.
		addTour: async ({ body }, res) =>
			res.json(await Tour.create(body)),
		// TODO: Try to get empty results from find.
		getAllTours: async ({ query }, res) => {
			res.json(await chain(transform(query, Tour.find(query)),
				Tour.find(query)));
		},
		getTour: async ({ params: { id }}, res) =>
			res.json(await Tour.findById(id)),
		updateTour: async ({ body, params: { id }}, res) =>
			res.json(await Tour.findByIdAndUpdate(
				id, body, {
					new: true,
					runValidators: true,
				},
			)),
		removeTour: async ({ params: { id }}, res) =>
			res.json(await Tour.findByIdAndDelete(id)),
	};
})();

module.exports = tourController;
