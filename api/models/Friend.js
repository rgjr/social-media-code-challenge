const FriendModel = (sequelize, Sequelize) => {
  const friend = sequelize.define('friend', {
    user_id: {
      type: Sequelize.STRING
    },
    friend_id: {
      type: Sequelize.STRING
    }
  })

  return friend
}

export default FriendModel
