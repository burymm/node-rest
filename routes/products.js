var express = require('express');
var router = express.Router();
var Products = require('../models/products.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Products.find(function (err, products) {
		if (err) {
			console.log("error", err);
			return res.send(err);
		}
		res.json(products);

	});
});

router.post('/', function(req, res, next) {
	var product = new Products(req.body);
	product.save(function(err) {
		if (err) {
			return res.send(err);
		}

		res.send({message: "Product added"})
	});
});

module.exports = router;
