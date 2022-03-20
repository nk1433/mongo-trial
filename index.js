// TODO: Unable to run app on destructuring get, listen.
const express = require('express');
const { config } = require('dotenv');
const { peek } = require('@laufire/utils/debug');
const {	connectDb } = require('./lib/mongooseManager');
const { config: configNormalizer } = require('./lib/normalizer');
const tourRouter = require('./routers/tours');

config({ path: './.env' });
const app = express();
const { DATABASE, PORT } = configNormalizer(process.env);

connectDb(DATABASE);

app.use(express.json());
app.use(tourRouter);

app.listen(PORT, () => peek(`Server is running @${ PORT }`));
