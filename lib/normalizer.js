const normalizers = {
	config: (data) => ({
		PORT: '3000',
		DATABASE: 'mongod://localhost:27017/natours',
		...data,
	}),
	query: (query) => ({
		matcher: {},
		filters: {},
		...query,
	}),
};

module.exports = normalizers;
