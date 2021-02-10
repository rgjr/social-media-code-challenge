import 'core-js/stable'
import 'regenerator-runtime/runtime'
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import cors from 'cors'

/**
 * server configuration
 */
import config from '../config'
// import publicRoutes from '../config/routes/publicRoutes'
import dbService from './services/db.service'

const { port, publicRoutes } = config

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV

/**
 * express application
 */
const app = express()
const server = http.Server(app)
const DB = dbService()

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors())

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// fill routes for express application
app.use('/v1', publicRoutes)

server.listen(port, () => {
  if (
    environment !== 'production'
    && environment !== 'development'
    && environment !== 'testing'
  ) {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`
    )
    process.exit(1)
  }

  console.log(`Server listening on port ${port}`)
  return DB
})
