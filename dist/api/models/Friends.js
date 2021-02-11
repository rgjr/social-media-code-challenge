"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var FriendModel = function FriendModel(sequelize, Sequelize) {
  console.log('FRIEND');
  var friend = sequelize.define('friend', {
    user_id: {
      type: Sequelize.STRING
    },
    friend_id: {
      type: Sequelize.STRING
    }
  });
  return friend;
};

var _default = FriendModel;
exports["default"] = _default;