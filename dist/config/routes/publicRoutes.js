"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var users = require('../../api/controllers/UserController');

var friends = require('../../api/controllers/FriendController');

var publicRoutes = (0, _express.Router)(); // Heartbeat

publicRoutes.get('/', function (req, res) {
  res.status(200).send('UpKeep Demo v1');
}); // Retrieve all users with pagination

publicRoutes.get('/users/list/:page?/:size?', users.findAll); // Retrieve single user

publicRoutes.get('/users/:id', users.findUserById); // Retrieve single user and their friends

publicRoutes.get('/users/:id/friends', friends.findFriendsByUserId); // Retrieve users and their friends

publicRoutes.get('/friends/list/:page?/:size?', friends.findAll);
publicRoutes.get('*', function (req, res) {
  res.status(400).json({
    message: 'invalid route'
  });
});
var _default = publicRoutes;
exports["default"] = _default;