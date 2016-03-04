var countries = require('../../app/controllers/country.server.controller'),
	cities = require('../../app/controllers/city.server.controller');

module.exports = function(app) {
	app.route('/api/cities').get(cities.list).post(cities.create);
	app.route('/api/cities/:cityId').get(cities.read).put(cities.update).delete(cities.delete);

	app.param('cityId', cities.cityByID);
};
