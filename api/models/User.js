const UserModel = (sequelize, Sequelize) => {
  console.log('USER')
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
