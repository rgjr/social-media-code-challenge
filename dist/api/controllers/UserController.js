"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.findUserById = exports.findAll = void 0;

var _database = _interopRequireDefault(require("../../config/database"));

var _pagination2 = _interopRequireDefault(require("../utils/pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var users = _database["default"].users; // Return all data in the users table

var findAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$params, page, size, _pagination, offset, limit;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, page = _req$params.page, size = _req$params.size;
            _pagination = (0, _pagination2["default"])(page, size), offset = _pagination.offset, limit = _pagination.limit;
            _context2.next = 4;
            return users.findAll({
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              },
              offset: offset,
              limit: limit
            }).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userList) {
                var total;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return users.count().then(function (result) {
                          return result;
                        });

                      case 2:
                        total = _context.sent;
                        res.status(200).json({
                          total: total,
                          count: userList.length,
                          userList: userList
                        });

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"](function (error) {
              return res.status(400).send(error);
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function findAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Return a single user by passing id


exports.findAll = findAll;

var findUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return users.findByPk(req.params.id, {
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }).then(function (user) {
              res.status(200).json(user);
            })["catch"](function (error) {
              return res.status(400).send(error);
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findUserById(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findUserById = findUserById;
var _default = findAll;
exports["default"] = _default;