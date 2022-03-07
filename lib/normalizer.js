const { config } = require('dotenv');

config({ path: './.env' });
const normalizeConfig = (data) => ({
	PORT: '3000',
	DATABASE: 'mongod://localhost:27017/natours',
	...data,
});

module.exports = normalizeConfig;
