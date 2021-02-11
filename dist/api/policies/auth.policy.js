"use strict";

var JWTService = require('../services/auth.service'); // usually: "Authorization: Bearer [token]" or "token: [token]"


module.exports = function (req, res, next) {
  var tokenToVerify;

  if (req.header('Authorization')) {
    var parts = req.header('Authorization').split(' ');

    if (parts.length === 2) {
      var scheme = parts[0];
      var credentials = parts[1];

      if (/^Bearer$/.test(scheme)) {
        tokenToVerify = credentials;
      } else {
        return res.status(401).json({
          msg: 'Format for Authorization: Bearer [token]'
        });
      }
    } else {
      return res.status(401).json({
        msg: 'Format for Authorization: Bearer [token]'
      });
    }
  } else if (req.body.token) {
    tokenToVerify = req.body.token;
    delete req.query.token;
  } else {
    return res.status(401).json({
      msg: 'No Authorization was found'
    });
  }

  return JWTService().verify(tokenToVerify, function (err, thisToken) {
    if (err) return res.status(401).json({
      err: err
    });
    req.token = thisToken;
    return next();
  });
};