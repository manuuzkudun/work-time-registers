const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/auth_config');

exports.ensureAuthenticated = (req, res, next) => {
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Your request doesn't have an authorization header"});
  }
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.decode(token, config.TOKEN_SECRET);

  if(payload.exp <= moment().unix()) {
     return res
      .status(401)
      .send({message: "The token has expired"});
  }
  req.employee = payload.sub;
  next();
}
