'use strict'

const express = require('express'),
			router = express.Router(),
			_ = require('underscore');
			

var workTimeArray = require('../dataManagement');



router.get('/employees',(req,res) => {
	
	//res.json(workTimeArray);
	var info = '<ul>';
	workTimeArray.forEach((record) => {
		info += `
		<li>
			<h2>${record.Name}</h2>
			<p>${record.Date}</p>
			<p>${record.Time}</p>
		</li>
	`
	});
	info += '</ul>'
	res.send(info);
});

router.get('/employee/:id',(req,res) => {
	var filtered = _.where(workTimeArray, {Id: req.params.id});
	if ( _.isEmpty(filtered) )
			res.send(`Sorry, no record for Id: ${req.params.id}`);
	else {
		var info = '<ul>';
	filtered.forEach((record) => {
		info += `
		<li>
			<h2>${record.Name}</h2>
			<p>${record.Date}</p>
			<p>${record.Time}</p>
		</li>
	`
	});
	info += '</ul>'
	res.send(info);
	}
});

module.exports = router;