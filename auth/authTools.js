const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../env')

const generateToken = user => {
  const payload = {
    ...user,
  }
  const options = {
    expiresIn: '1h',
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = { generateToken }
