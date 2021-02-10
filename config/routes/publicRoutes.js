import { Router } from 'express'

const users = require('../../api/controllers/UserController')

const publicRoutes = Router()

publicRoutes.get('/', (req, res) => {
  res.send('UpKeep Demo v1')
})

// Retrieve all users
publicRoutes.get('/users', users.findAll)

// Retrieve single user
publicRoutes.get('/users/:id', users.findOne)

// Retrieve users and their friends
publicRoutes.get('/users/friends', users.findFriends)

// Retrieve single user and their friends
publicRoutes.get('/users/:id/friends', users.findUserFriends)

export default publicRoutes
