var mongoose = require('mongoose'),
	City = mongoose.model('City');

exports.create = function(req, res) {
	var city = new City(req.body);
	//city.country = req.country;
	city.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: "Error in create method"
			});
		} else {
			res.json(city);
		}
	});
};

exports.list = function(req, res) {
	City.find().sort('-title').exec(function(err, cities) {
	if (err) {
		return res.status(400).send({
			message: "Error in list method"
		});
	} else {
		res.json(cities);
	}
	});
};

exports.cityByID = function(req, res, next, id) {
	City.findById(id).exec(function(err, city) {
		if (err) return next(err);
		if (!city) return next(new Error('Failed to load city '+ id));
		req.city = city;
		next();
	});
};

exports.read = function(req, res) {
	res.json(req.city);
};

exports.update = function(req, res) {
	var city = req.city;
	city.title = req.body.title;
	city.desc = req.body.desc;
	city.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: "Error in update method"
			});
		} else {
			res.json(city);
		}
	});
};

exports.delete = function(req, res) {
	var city = req.city;
	city.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: "Error in delete method"
			});
		} else {
			res.json(city);
		}
	});
};

