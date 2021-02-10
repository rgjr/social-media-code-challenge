const dev = {
  host: 'db',
  user: 'user',
  password: 'root',
  connectionLimit: 5,
  database: 'upkeep',
  username: 'user',
  dialect: 'mariadb'
}

const test = {
  host: 'localhost',
  user: 'user',
  password: 'root',
  connectionLimit: 5,
  database: 'upkeep',
  username: 'user',
  dialect: 'mariadb'
}

const prod = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mariadb'
}

module.exports = {
  dev,
  test,
  prod
}
