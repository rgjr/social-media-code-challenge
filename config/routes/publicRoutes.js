import { Router } from 'express'

const users = require('../../api/controllers/UserController')
const friends = require('../../api/controllers/FriendController')

const publicRoutes = Router()

// Heartbeat
publicRoutes.get('/', (req, res) => {
  res.send('UpKeep Demo v1')
})

// Retrieve all users with pagination
publicRoutes.get('/users/list/:page?/:size?', users.findAll)

// Retrieve single user
publicRoutes.get('/users/:id', users.findUserById)

// Retrieve single user and their friends
publicRoutes.get('/users/:id/friends', friends.findFriendsByUserId)

// Retrieve users and their friends
publicRoutes.get('/friends/list/:page?/:size?', friends.findAll)

export default publicRoutes
