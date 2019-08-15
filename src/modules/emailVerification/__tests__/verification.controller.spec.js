import request from 'supertest'
import jwt from 'jsonwebtoken'
import { stub } from 'sinon'
import crypto from 'crypto-random-string'
import { expect } from 'chai'
import app from '../../../../express/app'
import models from '../../../database/models'
import { APP_SECRET } from '../../../utils'
// const UserService = require('../../../services/user.services')
import VerificationServices from '../../../services/verificationtoken.services'

const { User, VerificationToken } = models

describe('VerificationController', () => {
  let headers
  // let error
  let user
  let tokenGeneration
  let verificationUrl
  let invalidEmailUrl
  let invalidTokenUrl
  before(async () => {
    headers = {
      'Content-Type': 'application/json'
    }
    // error = new Error()
    const { dataValues: { id, username } } = await User.create({
      username: 'rollplanes',
      email: 'fabischapeli97@gmail.com',
      password: 'Testuser#3',
      country: 'Kenya',
      city: 'Nairobi'
    })
    await User.create({
      username: 'enockolasi',
      email: 'enock.olasi@andela.com',
      password: 'Testuser#3',
      country: 'Kenya',
      city: 'Nairobi'
    })
    await VerificationToken.create({
      userId: id,
      token: crypto({ length: 16, type: 'base64' })
    })
    const getToken = await VerificationToken.findOne({
      where: { userId: id }
    })
    const token = getToken.dataValues.token
    verificationUrl = `/api/v1/verify?token=${token}&email=fabischapeli97@gmail.com`
    invalidEmailUrl = `/api/v1/verify?token=${token}&email=fabisch.apeli@andela.com`
    invalidTokenUrl = `/api/v1/verify?token=${token}&email=enock.olasi@andela.com`
    user = username
    tokenGeneration = jwt.sign({ userId: id }, APP_SECRET)
  })
  after(async () => {
    await User.destroy({
      where: {}
    })
  })
  describe('verifyEmail', () => {
    it('should verify user successfully', (done) => {
      request(app)
        .get(verificationUrl)
        .set(headers)
        .expect(200, (_err, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body.message).to.equal(`${user} has been verified`)
          expect(res.body.tokenGeneration).to.equal(tokenGeneration)
          done()
        })
    })
    it('should return error if email not found', (done) => {
      request(app)
        .get(invalidEmailUrl)
        .set(headers)
        .expect(404, (_err, res) => {
          expect(res.statusCode).to.equal(404)
          expect(res.body.message).to.equal('Email not found')
          done()
        })
    })
    it('should return error if email is already verified', (done) => {
      request(app)
        .get(verificationUrl)
        .set(headers)
        .expect(202, (_err, res) => {
          expect(res.statusCode).to.equal(202)
          expect(res.body.message).to.equal('Email Already Verified')
          done()
        })
    })
    it('should return error if token is invalid', (done) => {
      stub(VerificationServices, 'findToken').returns(undefined)
      request(app)
        .get(invalidTokenUrl)
        .set(headers)
        .expect(404, (_err, res) => {
          expect(res.statusCode).to.equal(404)
          expect(res.body.message).to.equal('Token Expired')
          done()
        })
    })
    // it('should return server error if verification fails', (done) => {
    //   stub(UserService, '_findByEmail').returns(error)
    //   stub(VerificationServices, 'findToken').returns(undefined)
    //   request(app)
    //     .get(verificationUrl)
    //     .set(headers)
    //     .expect(403, (_err, res) => {
    //       expect(res.statusCode).to.equal(403)
    //       expect(res.body.error).to.equal('Verification failed')
    //       done()
    //     })
    // })
  })
})
