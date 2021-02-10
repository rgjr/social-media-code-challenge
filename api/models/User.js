const User = (sequelize, Sequelize) => {
  sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  })
}

export default User
