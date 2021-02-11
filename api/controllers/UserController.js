import db from '../../config/database'
import pagination from '../utils/pagination'

const { users } = db

// Return all data in the users table
export const findAll = async (req, res) => {
  const { page, size } = req.params
  const { offset, limit } = pagination(page, size)

  await users
    .findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      offset,
      limit
    })
    .then((userList) => {
      res.json({
        count: userList.length,
        userList
      })
    })
    .catch((error) => res.status(400).send(error))
}

// Return a single user by passing id
export const findUserById = async (req, res) => {
  // Sequelize deprecated findById in favor of findByPk in v6
  await users
    .findByPk(req.params.id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((user) => {
      res.json(user)
    })
    .catch((error) => res.status(400).send(error))
}

export default findAll
