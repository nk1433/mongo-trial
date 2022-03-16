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
		welcome: (req, res) => res.send('hello'),
		addRecord: async ({ body }, res) => {
			// eslint-disable-next-line no-console
			console.log(body);
			const record = await Tour.create(body);

			return res.json(record);
		},
	};
})();

module.exports = tourController;
