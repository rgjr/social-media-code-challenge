"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dbTest = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("./connection"));

var _User = _interopRequireDefault(require("../api/models/User"));

var _Friend = _interopRequireDefault(require("../api/models/Friend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _connection$dev = _connection["default"].dev,
    host = _connection$dev.host,
    password = _connection$dev.password,
    connectionLimit = _connection$dev.connectionLimit,
    database = _connection$dev.database,
    username = _connection$dev.username,
    dialect = _connection$dev.dialect;
var sequelize = new _sequelize["default"](database, username, password, {
  host: host,
  dialect: dialect,
  operatorsAliases: '0',
  connectionLimit: connectionLimit
});
var testConnection = new _sequelize["default"](database, username, password, {
  host: 'localhost',
  dialect: dialect,
  operatorsAliases: '0',
  connectionLimit: connectionLimit
});
var users = (0, _User["default"])(sequelize, _sequelize["default"]);
var friends = (0, _Friend["default"])(sequelize, _sequelize["default"]);
var db = {
  Sequelize: _sequelize["default"],
  sequelize: sequelize,
  users: users,
  friends: friends,
  testConnection: testConnection
};

var dbTest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return sequelize.authenticate();

          case 3:
            console.log("Connection to ".concat(database, " on host ").concat(host, " successful!"));
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error('Unable to connect to the database:', _context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function dbTest() {
    return _ref.apply(this, arguments);
  };
}();

exports.dbTest = dbTest;
var _default = db;
exports["default"] = _default;