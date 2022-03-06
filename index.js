/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');

config({ path: './.env' });
const {
	env: {
		PORT = '3500',
		DATABASE = 'mongod://localhost:27017/natours',
	},
} = process;
const app = express();

mongoose.connect(DATABASE)
	.then(() => console.log('Successfully connected to db.'))
	.catch(() => console.log('Error communicating with db.'));

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(PORT, () => {
	console.log(`listening to ${ PORT }`);
});
