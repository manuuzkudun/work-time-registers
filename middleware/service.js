const jwt = require('jwt-simple'),
      moment = require('moment'),
      config = require('../config/auth_config');

exports.createToken = user => {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};