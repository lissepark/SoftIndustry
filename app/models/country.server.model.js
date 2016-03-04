var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CountrySchema = new Schema({
	title: String,
	text: String
});

mongoose.model('Country', CountrySchema);