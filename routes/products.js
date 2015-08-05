var express = require('express');
var router = express.Router();
var Products = require('../models/products.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Products.find(function (err, products) {
		if (err) {
			return res.send(err);
		}
		res.json(products);
	});
});

router.post('/', function(req, res, next) {
	if (Array.isArray && Array.isArray(req.body)) {
		req.body.map(function(item) {
			var product = new Products(item);
			product.save(function(err) {
				if (err) {
					return res.send(err);
				}
			});
		});
	} else {
		var product = new Products(req.body);
		product.save(function(err) {
			if (err) {
				return res.send(err);
			}
			res.send({message: "Product added"})
		});
	}
});

module.exports = router;