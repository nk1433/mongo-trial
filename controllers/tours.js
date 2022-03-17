const modelManager = require('../models');

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
		addRecord: async ({ body }, res) =>
			res.json(await Tour.create(body)),
		getAllTours: async (req, res) =>
			res.json(await Tour.find()),
		getTour: async ({ params: { id }}, res) =>
			res.json(await Tour.findById(id)),
		updateTour: async ({ body, params: { id }}, res) =>
			res.json(await Tour.findByIdAndUpdate(
				id, body, {
					new: true,
					runValidators: true,
				},
			)),
	};
})();

module.exports = tourController;
