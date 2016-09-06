'use strict'

const express = require('express'),
			router = express.Router();

router.get('/', (req,res) => {
	res.send(`Hello World!!!
		<script src="/reload/reload.js"></script>`);
});


module.exports= router;


