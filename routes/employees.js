'use strict';

const express = require('express')
    , router = express.Router()
    , _ = require('underscore');

var workTimeArray = require('../Register');

router.get('/employees', (req, res) => {
    res.render('worktime', {
        records: workTimeArray
    });
    //res.json(workTimeArray);
});

router.get('/employee/:id', (req, res) => {
    var filtered = _.where(workTimeArray, {
        Id: req.params.id
    });
    res.render('worktime', {
        records: filtered
    });
});

module.exports = router;