/* eslint-disable no-console */
// TODO: Unable to run app on destructuring get, listen.
const express = require('express');
const {	connectDb } = require('./lib/mongooseManager');
const normalizeConfig = require('./lib/normalizer');
const tourRouter = require('./routers/tours');

const app = express();
const { DATABASE, PORT } = normalizeConfig(process.env);

connectDb(DATABASE);

app.use(tourRouter);

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`listening to ${ PORT }`);
});
