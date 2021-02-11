"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _publicRoutes = _interopRequireDefault(require("./routes/publicRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  migrate: false,
  publicRoutes: _publicRoutes["default"],
  port: process.env.PORT || '3000'
};
var _default = config;
exports["default"] = _default;