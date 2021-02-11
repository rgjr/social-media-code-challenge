import { Router } from 'express'

const users = require('../../api/controllers/UserController')
const friends = require('../../api/controllers/FriendController')

const publicRoutes = Router()

publicRoutes.get('/', (req, res) => {
  res.send('UpKeep Demo v1')
})

// Retrieve all users
publicRoutes.get('/users', users.findAll)

// Retrieve single user
publicRoutes.get('/users/:id', users.findUserById)

// Retrieve users and their friends
publicRoutes.get('/friends', friends.findAll)

// Retrieve single user and their friends
publicRoutes.get('/users/:id/friends', friends.findFriendsByUserId)

export default publicRoutes
