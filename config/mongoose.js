// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var	config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(config.db);

	require('../app/models/user.server.model');
	require('../app/models/country.server.model');
	require('../app/models/city.server.model');

	// Return the Mongoose connection instance
	return db;
};
