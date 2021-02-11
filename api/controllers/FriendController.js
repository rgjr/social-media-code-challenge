import db from '../../config/database'
import pagination from '../utils/pagination'

const { friends } = db

// Return all data in the friends table
export const findAll = async (req, res) => {
  const { page, size } = req.params
  const { offset, limit } = pagination(page, size)

  await friends
    .findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      offset,
      limit
    })
    .then((friendsList) => {
      res.json({
        count: friendsList.length,
        friendsList
      })
    })
    .catch((error) => res.status(400).send(error))
}

// Return all friend relationships for a user by passing id
export const findFriendsByUserId = async (req, res) => {
  const { id } = req.params

  await friends
    .findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: {
        user_id: [id]
      }
    })
    .then((friendsList) => {
      res.json({
        user_id: id,
        count: friendsList.length,
        friendsList
      })
    })
    .catch((error) => res.status(400).send(error))
}

export default findAll
