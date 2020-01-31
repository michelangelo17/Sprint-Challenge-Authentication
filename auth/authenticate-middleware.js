const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../env')
const { findUser } = require('./model')

const valBody = (req, res, next) => {
  if (!req.body.username && !req.body.password) {
    throw new Error('Must send both a username and a password')
  }
  if (!req.body.username) {
    throw new Error('Must send a username')
  }
  if (!req.body.password) {
    throw new Error('Must send a password')
  }
  next()
}

const hashPassword = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 14)
  next()
}

const validatePassword = async (req, res, next) => {
  const user = await findUser(req.body.username)
  if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
    return res
      .status(401)
      .json({ message: 'You shall not pass!', token: false })
  }
  req.body.user = {
    subject: user.user_id,
    username: user.username,
  }
  next()
}

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    res.status(401).json({ message: 'You shall not pass!', token: false })
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: 'You shall not pass!', token: false })
    }
    req.decodedToken = decodedToken
  })
  next()
}

module.exports = { valBody, validatePassword, hashPassword, authenticate }
