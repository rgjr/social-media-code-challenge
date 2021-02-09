const Mariadb = require('mariadb')
const bcryptService = require('../services/bcrypt.service')

// const mariadb = require('../../config/database')

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user) // eslint-disable-line no-param-reassign
  }
}

const tableName = 'users'

const User = Mariadb.define(
  'User',
  {
    email: {
      type: Mariadb.STRING,
      unique: true
    },
    password: {
      type: Mariadb.STRING
    }
  },
  { hooks, tableName }
)

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = { ...this.get() }

  delete values.password

  return values
}

module.exports = User
