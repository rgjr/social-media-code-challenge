import Sequelize from 'sequelize'
import connection from './connection'
import UserModel from '../api/models/User'

const {
  host,
  password,
  connectionLimit,
  database,
  username,
  dialect
} = connection.dev

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  operatorsAliases: '0',
  connectionLimit
})

const users = UserModel(sequelize, Sequelize)

const db = {
  Sequelize,
  sequelize,
  users
}

export const dbTest = async () => {
  try {
    await sequelize.authenticate()
    console.log(`Connection to ${database} on host ${host} successful!`)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default db
