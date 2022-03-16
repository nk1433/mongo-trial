// TODO: Unable to run app on destructuring get, listen.
const express = require('express');
const { peek } = require('@laufire/utils/debug');
const {	connectDb } = require('./lib/mongooseManager');
const normalizeConfig = require('./lib/normalizer');
const tourRouter = require('./routers/tours');

const app = express();
const { DATABASE, PORT } = normalizeConfig(process.env);

connectDb(DATABASE);

app.use(express.json());
app.use(tourRouter);

app.listen(PORT, () => peek(`Server is running @${ PORT }`));
