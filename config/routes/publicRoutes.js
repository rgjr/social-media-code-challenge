import { Router } from 'express'
import User from '../../api/models/User'

const publicRoutes = Router()

publicRoutes.get('/', (req, res) => {
  res.send('Hello World!')
})

// Retrieve all users
publicRoutes.get('/users', (req, res) => {
  const result = User.findall

  console.log(result)

  res.send(result)
})

export default publicRoutes
