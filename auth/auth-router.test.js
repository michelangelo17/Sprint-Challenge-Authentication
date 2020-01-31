const server = require('../api/server')
const request = require('supertest')
const db = require('../database/dbConfig')

describe('authRouter', () => {
  beforeAll(async () => await db('users').truncate())

  describe('/register', () => {
    describe('with correct request body', () => {
      test('returns a status of 201, a message, and a token', async () => {
        const res = await request(server)
          .post('/api/auth/register')
          .send({ username: 'atestuser', password: 'atestpassword' })

        expect(res.status).toBe(201)

        expect(JSON.parse(res.text).message).toBe(
          'atestuser successfully created!'
        )

        expect(JSON.parse(res.text).token).toBeTruthy()
      })
    })

    describe('with missing request body', () => {
      test('returns a status of 500, a message, error, and no token', async () => {
        const res = await request(server).post('/api/auth/register')

        expect(res.status).toBe(500)

        expect(JSON.parse(res.text).message).toBe('Uh Oh! 500 Error!')

        expect(JSON.parse(res.text).error).toBe(
          'Must send both a username and a password'
        )

        expect(JSON.parse(res.text).token).toBeFalsy()
      })
    })
  })

  describe('/login', () => {
    describe('with correct request body', () => {
      test('returns a status of 201, a message, and a token', async () => {
        const res = await request(server)
          .post('/api/auth/login')
          .send({ username: 'atestuser', password: 'atestpassword' })

        expect(res.status).toBe(200)

        expect(JSON.parse(res.text).message).toBe('atestuser logged in!')

        expect(JSON.parse(res.text).token).toBeTruthy()
      })
    })

    describe('with missing request body', () => {
      test('returns a status of 500, a message, error, and no token', async () => {
        const res = await request(server).post('/api/auth/login')

        expect(res.status).toBe(500)

        expect(JSON.parse(res.text).message).toBe('Uh Oh! 500 Error!')

        expect(JSON.parse(res.text).error).toBe(
          'Must send both a username and a password'
        )

        expect(JSON.parse(res.text).token).toBeFalsy()
      })
    })
  })
})
