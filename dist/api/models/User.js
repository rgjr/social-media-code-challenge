"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var UserModel = function UserModel(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    }
  });
  return User;
};

var _default = UserModel;
exports["default"] = _default;