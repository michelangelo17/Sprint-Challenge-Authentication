const router = require('express-promise-router')()
const {
  valBody,
  validatePassword,
  hashPassword,
} = require('./authenticate-middleware')
const { generateToken } = require('./authTools')
const db = require('./model')

module.exports = router

router.post('/register', valBody, hashPassword, async (req, res) => {
  const user = await db.addUser(req.body)
  const token = generateToken(user)
  res.status(201).json({
    message: `${user.username} successfully created!`,
    token: token,
  })
})

router.post('/login', valBody, validatePassword, (req, res) => {
  const token = generateToken(req.body.user)
  res.json({
    message: `${req.body.user.username} logged in!`,
    token: token,
  })
})

router.use((err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message.replace(/\\/g, ''),
  })
)
