'use strict';

const express = require('express'),
      router = express.Router(),
      dateFormat = require('dateformat'),
      Employee = require("../models/Employee");


router.get('/employee/:id', (req,res) =>{
  Employee.findById({_id: req.params.id}, (err,result) => {
    if (err) throw err;
    if (result) {
      let vm = {
        msg: 'success',
        data: {
          id: result._id,
          name: result.name,
          email: result.email,
          registers: result.registers.map(reg => { return {
            dateTime: reg.dateTime,
            date: dateFormat(reg.dateTime,"dd/mm/yyyy"),
            time: dateFormat(reg.dateTime,"HH:MM:ss"),
            action: reg.action
          }
        })
      }
    };
    res.json(vm);
  } else {
      res.json({msg: 'no-data'});
    }
  });
});



router.get('/employees/names', (req,res) => {
  Employee.find({}, '_id name', (err,results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;