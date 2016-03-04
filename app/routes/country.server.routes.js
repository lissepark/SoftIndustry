var countries = require('../../app/controllers/country.server.controller');
var cities = require('../../app/controllers/city.server.controller');

module.exports = function(app) {
	app.route('/api/countries').post(countries.create).get(countries.list);
	app.route('/api/countries/:countryId').get(countries.read).put(countries.update).delete(countries.delete);;
	app.param('countryId', countries.countryByID);
};
