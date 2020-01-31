const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')

const { authenticate } = require('../auth/authenticate-middleware.js')
const authRouter = require('../auth/auth-router.js')
const jokesRouter = require('../jokes/jokes-router.js')

const server = express()

server.use(express.static(path.join('../client/build')))

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/jokes', authenticate, jokesRouter)

server.get('*', (req, res) => {
  res.sendFile(path.join('../client/build/index.html'))
})

module.exports = server
