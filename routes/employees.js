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
			<p>${record.Action}</p>
		</li>
	`
	});
	info += '</ul>'
	info += '<script src="/reload/reload.js"></script>'
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
			<p>${record.Action}</p>
		</li>
	`
	});
	info += '</ul>'
	info += '<script src="/reload/reload.js"></script>'
	res.send(info);
	}
});

module.exports = router;