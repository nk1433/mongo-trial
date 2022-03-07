/* eslint-disable no-console */
// TODO: Unable to run app on destructuring get, listen.
const express = require('express');
const {
	connectDb, createSchema, createModelInstance,
	createModel,
} = require('./lib/mongooseManager');
const normalizeConfig = require('./lib/normalizer');

const app = express();
const { DATABASE, PORT } = normalizeConfig(process.env);

connectDb(DATABASE);

const tourSpec = {
	name: {
		type: String,
		required: true,
		unique: true,
	},
	rating: {
		type: Number,
		default: 6,
	},
	price: {
		type: Number,
		required: true,
	},
};
const tourSchema = createSchema(tourSpec);
const Tour = createModel('Tour', tourSchema);
const testTour = createModelInstance(Tour, {
	name: 'kodaicanal',
	rating: 7.5,
	price: 7500,
});

// TODO: Unable to destructure save.
testTour.save().then((doc) => console.log(doc))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`listening to ${ PORT }`);
});
