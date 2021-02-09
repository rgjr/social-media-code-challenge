// const Sequelize = require('sequelize')
// const path = require('path')
const Mariadb = require('mariadb')
const connection = require('./connection')

const pool = Mariadb.createPool(connection.development)

const database = async function asyncFunction() {
  const conn = await pool.getConnection()
  const rows = await conn.query('SELECT 1 as val')

  console.log(rows)

  const res = await conn.query('INSERT INTO myTable value (?, ?)', [
    1,
    'mariadb'
  ])
  console.log(res) // { affectedRows: 1, insertId: 1, warningStatus: 0 }
}

module.exports = database
