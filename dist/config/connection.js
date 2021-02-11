"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var dev = {
  host: 'db',
  user: 'user',
  password: 'root',
  connectionLimit: 5,
  database: 'upkeep',
  username: 'user',
  dialect: 'mariadb'
};
var test = {
  host: 'localhost',
  user: 'user',
  password: 'root',
  connectionLimit: 5,
  database: 'upkeep',
  username: 'user',
  dialect: 'mariadb'
};
var prod = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mariadb'
};
var _default = {
  dev: dev,
  test: test,
  prod: prod
};
exports["default"] = _default;