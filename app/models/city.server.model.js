var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CitySchema = new Schema({
	title: String,
	desc: String,
	country: String
});

mongoose.model('City', CitySchema);	
