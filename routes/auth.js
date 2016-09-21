'use strict';

const express = require('express'),
      router = express.Router(),
      Employee = require("../models/Employee"),
      service = require('../middleware/service');


/*router.post('/signup', (req,res) => {
  const employee = new Employee(req.body);
  employee.save( err => {
    if (err) throw err;
    return res
      .status(200)
      .send({token: service.createToken(employee)});
  }); 
});*/


/*router.post('/login', (req,res) => {
  Employee.findOne({email: req.body.email.toLowerCase()}, (err, user) => {
    if (err) throw err;
    if (user) {
      if (req.body.password == user.password ) {
        return res
          .status(200)
          .send({token: service.createToken(user)});
      } else {
        
      }
    } else {
      
    }
});*/

//router.get('/private',middleware.ensureAuthenticated, function(req, res) {...} );

module.exports = router;