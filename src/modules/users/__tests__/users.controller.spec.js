const request = require('supertest')
const { stub } = require('sinon')
const { expect } = require('chai')
const app = require('../../../../express/app')
const UserService = require('../../../services/user.services')
const {
  registerPayload,
  loginPayload,
  wrongPWD,
  invalidUsername
} = require('../__tests__/__mocks__')
const models = require('../../../database/models')

const { User } = models

const registerUrl = '/api/v1/register'
const loginUrl = '/api/v1/login'

describe('UserController', () => {
  let headers
  let error
  before(() => {
    headers = {
      'Content-Type': 'application/json'
    }
    error = new Error()
  })
  after(async () => {
    await User.destroy({
      where: {}
    })
  })
  describe('createUser', () => {
    it('should create a new user successfully', (done) => {
      request(app)
        .post(registerUrl)
        .send(registerPayload)
        .set(headers)
        .expect(201, (_err, res) => {
          // eslint-disable-next-line no-unused-expressions
          expect(res.statusCode).to.equal(201)
          expect(res.body.message).to.equal('Check your email for account verification')
          expect(res.body.user.isVerified).to.equal(null)
          expect(res.body.user.username).to.equal('rollplanes_')
          expect(res.body.user.email).to.equal('fabish.olasi@andela.com')
          done()
        })
    })
    it('should return a conflicting message if same data already exists', (done) => {
      request(app)
        .post(registerUrl)
        .send(registerPayload)
        .set(headers)
        .expect(409, (_err, res) => {
          expect(res.statusCode).to.equal(409)
          expect(res.body.message).to.equal('Username and Email must be unique')
          done()
        })
    })
    it('should return server error', (done) => {
      stub(UserService, '_findOrCreateUser').returns(error)
      request(app)
        .post(registerUrl)
        .send(registerPayload)
        .set(headers)
        .expect(500, (_err, res) => {
          expect(res.statusCode).to.equal(500)
          expect(res.body.message).to.equal('Could not complete request. Try Again!')
          done()
        })
    })
  })

  describe('signInUser', () => {
    describe('successfull login', () => {
      let user
      before(async () => {
        user = await User.findOne({
          where: { username: 'rollplanes_' }
        })
        user.update({ isVerified: true })
      })
      it('should successfully login the user', (done) => {
        request(app)
          .post(loginUrl)
          .send(loginPayload)
          .set(headers)
          .expect(200, (_err, res) => {
            expect(res.statusCode).to.equal(200)
            expect(res.body.success).to.equal(true)
            expect(res.body.message).to.equal('Successful login')
            // Add expect statement for token returned
            done()
          })
      })
    })

    it('should return error for non-existing username', (done) => {
      request(app)
        .post(loginUrl)
        .send(invalidUsername)
        .set(headers)
        .expect(404, (_err, res) => {
          expect(res.statusCode).to.equal(404)
          expect(res.body.message).to.equal('Unknown user')
          done()
        })
    })
    it('should return error if wrong password is used', (done) => {
      request(app)
        .post(loginUrl)
        .send(wrongPWD)
        .set(headers)
        .expect(400, (_err, res) => {
          expect(res.statusCode).to.equal(400)
          expect(res.body.message).to.equal('Wrong password')
          done()
        })
    })
    it('should return should not login if account has not been verified', (done) => {
      request(app)
        .post(loginUrl)
        .send(loginPayload)
        .set(headers)
        .expect(400, (_err, res) => {
          expect(res.statusCode).to.equal(400)
          expect(res.body.message).to.equal('You must activate/verify your account to login')
          done()
        })
    })
    // it('should return server error', (done) => {
    //   stub(UserService, '_findByUsername').returns(error)
    //   request(app)
    //     .post(loginUrl)
    //     .send(loginPayload)
    //     .set(headers)
    //     .expect(500, (_err, res) => {
    //       expect(res.statusCode).to.equal(500)
    //       done()
    //     })
    // })
  })
})
