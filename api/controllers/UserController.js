import db from '../../config/database'

const { users } = db
console.log('USERCONTROLLER: ', users)

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

export const findOne = async (req, res) => {
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

export const findFriends = async (req, res) => {
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

export const findUserFriends = async (req, res) => {
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

export default findAll
