const express = require('express');
const { connectDb } = require('./lib/mongooseManager');
const { getData } = require('./lib/helpers');

const app = express();
const { DATABASE, PORT } = getData();

connectDb(DATABASE);

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`listening to ${ PORT }`);
});
