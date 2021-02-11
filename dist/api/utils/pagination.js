"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var pagination = function pagination(page, size) {
  // Number of users to return, defaults to 5
  var limit = size ? Number(size) : 5; // Page number to return via offset, defaults to 0

  var offset = page ? Number(page) * limit : 0;
  return {
    offset: offset,
    limit: limit
  };
};

var _default = pagination;
exports["default"] = _default;