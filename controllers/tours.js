const modelManager = require('../models');
const { chain } = require('../lib/helpers');
const { query: queryNormalizer } = require('../lib/normalizer');

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
			const { filters, matcher } = queryNormalizer(query);

			res.json(await chain(filters, Tour.find(matcher)));
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
