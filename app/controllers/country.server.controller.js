var mongoose = require('mongoose');
var Country = mongoose.model('Country');

exports.create = function(req, res) {
	var country = new Country(req.body);
	country.save(function(err) {
		if (err) {
			//return next(err);
		} else {
			res.json(country);
		}
	});
};

exports.list = function(req, res) {
	Country.find().sort('-title').exec(function(err, countries) {
		if (err) {
			//return next(err);
		} else {
			res.json(countries);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.country);
};

exports.countryByID = function(req, res, next, id) {
	Country.findById(id).exec(function(err, country) {
		if (err) {
			//return next(err);
		} else {
			req.country = country;
			next();
		}
	});
};

exports.update = function(req, res) {
	var country = req.country;
	country.title = req.body.title;
	country.text = req.body.text;
	country.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: "Error in update method"
			});
		} else {
			res.json(country);
		}
	});
};

exports.delete = function(req, res) {
	var country = req.country;
	country.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: "Error in delete method"
			});
		} else {
			res.json(country);
		}
	});
};
