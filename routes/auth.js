'use strict';

const express = require('express'),
      router = express.Router(),
      Employee = require("../models/Employee");


router.post('/signup', auth.emailSignup);  


router.post('/login', auth.emailLogin);


module.exports = router;