const development = {
  host: 'localhost',
  user: 'user',
  password: 'root',
  connectionLimit: 5,
  database: 'upkeep',
  username: 'user',
  dialect: 'mysql'
}

const testing = {
  host: 'localhost',
  user: 'user',
  password: 'root',
  connectionLimit: 5,
  database: 'upkeep',
  username: 'user',
  dialect: 'mysql'
}

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql'
}

module.exports = {
  development,
  testing,
  production
}
