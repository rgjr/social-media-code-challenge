import db from '../../config/database'

const { users } = db

// Return all data in the users table
export const findAll = async (req, res) => {
  console.log('FINDALL')

  await users
    .findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    })
    .then((userList) => {
      res.json(userList)
    })
    .catch((error) => res.status(400).send(error))
}

// Return a single user by passing id
export const findUserById = async (req, res) => {
  console.log('FINDBYID')

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
