"use strict";
var express = require('express');
var router = express.Router();

//this will be replaced by:
//var doggos = require(../api/controllers/test.controller.js);
//doggos.functionName will call a controller function.
var doggos = [
	{
		name: "Bandit",
		breed: "German Shepherd",
		sex: "Male"
	},
	{
		name: "Rogue",
		breed: "Border Collie",
		sex: "Female"
	},
	{
		name: "Max",
		breed: "Flatcoat Retriever",
		sex: "Male"
	},
	{
		name: "Bailey",
		breed: "Golden Retriever",
		sex: "Female"
	},
];

//dogs endpoint
router.get('/', (req, res) => {
	res.json(doggos);
});

//dogs/:id
router.get('/:id', (req, res) => {
	res.json(doggos[req.params.id]);
});

module.exports = router;