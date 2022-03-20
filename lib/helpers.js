const { reduce } = require('@laufire/utils/collection');

const helpers = {
	chain: (methods, base) => reduce(
		methods, (
			acc, value, method,
		) => acc[method](value), base,
	),
};

module.exports = helpers;
