const { reduce, filter } = require('@laufire/utils/collection');

const helpers = {
	chain: (methods, base) => reduce(
		methods, (
			acc, value, method,
		) =>
			acc[method](value), base,
	),
	transform: (queries, base) =>
		filter(queries, (value, method) => base[method]),
};

module.exports = helpers;
