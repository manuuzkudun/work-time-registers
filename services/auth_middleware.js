const jwt = require('jwt-simple'),
      moment = require('moment'), 
      config = require('../config/auth_config');

exports.ensureAuthenticated = function(req, res, next) {  
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Your request doesn't have an authorization header"});
  }
  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if(payload.exp <= moment().unix()) {
     return res
      .status(401)
      .send({message: "The token has expired"});
  }
  req.user = payload.sub;
  next();
}