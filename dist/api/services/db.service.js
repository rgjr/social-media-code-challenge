"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var database = require('../../config/database');

var dbService = function dbService() {
  return database.dbTest();
};

var _default = dbService;
exports["default"] = _default;