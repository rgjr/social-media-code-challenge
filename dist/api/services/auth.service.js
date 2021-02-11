"use strict";

var jwt = require('jsonwebtoken');

var secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret';

var authService = function authService() {
  var issue = function issue(payload) {
    return jwt.sign(payload, secret, {
      expiresIn: 10800
    });
  };

  var verify = function verify(token, cb) {
    return jwt.verify(token, secret, {}, cb);
  };

  return {
    issue: issue,
    verify: verify
  };
};

module.exports = authService;