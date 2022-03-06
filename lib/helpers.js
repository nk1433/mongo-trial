const { config } = require('dotenv');

config({ path: './.env' });
const helpers = {
	getData: () => ({
		PORT: '3000',
		DATABASE: 'mongod://localhost:27017/natours',
		...process.env,
	}),
};

module.exports = helpers;
