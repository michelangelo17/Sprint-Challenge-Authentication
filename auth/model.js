const db = require('../database/dbConfig')

const findUser = async user =>
  await db('users')
    .where('username', user)
    .first()

const addUser = async newUser => {
  await db('users').insert(newUser)
  return await findUser(newUser.username)
}

module.exports = { addUser, findUser }
