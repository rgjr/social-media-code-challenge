import db from '../../config/database'

const { friends } = db

// Return all data in the friends table
export const findAll = async (req, res) => {
  await friends
    .findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((userList) => {
      res.json(userList)
    })
    .catch((error) => res.status(400).send(error))
}

// Return all friend relationships for a user by passing id
export const findFriendsByUserId = async (req, res) => {
  await friends
    .findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: {
        user_id: [req.params.id]
      }
    })
    .then((userList) => {
      res.json(userList)
    })
    .catch((error) => res.status(400).send(error))
}

export default findAll
