'use strict';

const express = require('express'),
      router = express.Router(),
      dateFormat = require('dateformat'),
      Employee = require("../models/Employee");


router.get('/employee/:id', (req,res) =>{
  Employee.findById({_id: req.params.id}).exec( (err,result) => {
    if (err) throw err;
    if (result) {
      // Get registers from employee
      let registers = result.registers.map(reg => {
        return {
          dateTime: reg.dateTime,
          date: dateFormat(reg.dateTime,"dd/mm/yyyy"),
          time: dateFormat(reg.dateTime,"HH:MM:ss"),
          action: reg.action
        }
      });
      // Send JSON response
      res.json({
        msg: 'success',
        id: result._id,
        name: result.name,
        email: result.email,
        registers: registers
      });
    }
    else {
      res.json({msg: 'no-data'});
    }
  });
});



module.exports = router;