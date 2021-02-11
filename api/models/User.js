const UserModel = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    }
  })

  return User
}

export default UserModel
