"use strict";

var bcrypt = require('bcrypt-nodejs');

var bcryptService = function bcryptService() {
  var password = function password(user) {
    var salt = bcrypt.genSaltSync();
    var hash = bcrypt.hashSync(user.password, salt);
    return hash;
  };

  var comparePassword = function comparePassword(pw, hash) {
    return bcrypt.compareSync(pw, hash);
  };

  return {
    password: password,
    comparePassword: comparePassword
  };
};

module.exports = bcryptService;