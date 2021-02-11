"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("../config"));

var _db = _interopRequireDefault(require("./services/db.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * server configuration
 */
var port = _config["default"].port,
    publicRoutes = _config["default"].publicRoutes; // environment: development, staging, testing, production

var environment = process.env.NODE_ENV;
/**
 * express application
 */

var app = (0, _express["default"])();

var server = _http["default"].Server(app);

var DB = (0, _db["default"])(); // allow cross origin requests
// configure to only allow requests from certain origins

app.use((0, _cors["default"])()); // parsing the request bodys

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json()); // fill routes for express application

app.use('/v1', publicRoutes);
server.listen(port, function () {
  if (environment !== 'production' && environment !== 'development' && environment !== 'testing') {
    console.error("NODE_ENV is set to ".concat(environment, ", but only production and development are valid."));
    process.exit(1);
  }

  console.log("Server listening on port ".concat(port));
  return DB;
});