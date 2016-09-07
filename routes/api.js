'use strict'

const express = require('express'),
			router = express.Router(),
			_ = require('underscore');
			

var workTimeArray = require('../dataManagement');

router.get('/api/list',(req,res) => {
	res.json(workTimeArray);
});


router.get('/api/:id',(req,res) => {
	var filtered = _.where(workTimeArray, {Id: req.params.id});
	res.json(filtered);
});

module.exports = router;