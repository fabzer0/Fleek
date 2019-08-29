/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import { spy, stub } from 'sinon'
import UserValidator from '../user.validator'
import {
  req1, req3, req4, req5, req6, req7
} from './__mocks__'

describe('UserValidator', () => {
  let mockResponse,
    res,
    next
  beforeEach(() => {
    mockResponse = () => {
      const res = {}
      res.status = stub().returns(res)
      res.json = stub().returns(res)
      return res
    }
    res = mockResponse()
    next = spy()
  })
  describe('registrationInputs', () => {
    it('should return errors when input validation fails', () => {
      UserValidator.registrationInputs(req1, res, next)
      expect(res.status.calledOnce).to.be.true
      expect(res.status.calledWith(400)).to.be.true
      expect(res.json.calledOnce).to.be.true
      expect(res.json.calledWith({
        errors: [
          'Please provide password.',
          'Please provide country.'
        ]
      })).to.be.true
    })
    it('should return errors when input validation fails', () => {
      UserValidator.registrationInputs(req4, res, next)
      expect(res.status.calledOnce).to.be.true
      expect(res.status.calledWith(400)).to.be.true
      expect(res.json.calledOnce).to.be.true
      expect(res.json.calledWith({
        error: 'Only numbers, letters, periods and underscores allowed'
      })).to.be.true
    })
    it('should return undefined if validation passes', () => {
      const response = UserValidator.registrationInputs(req7, res, next)
      expect(response).to.equal(undefined)
    })
  })
  describe('validateUserInputs', () => {
    it('should return errors if username format is not met', () => {
      UserValidator.validateUserInputs(req4, res)
      expect(res.status.calledOnce).to.be.true
      expect(res.status.calledWith(400)).to.be.true
      expect(res.json.calledOnce).to.be.true
      expect(res.json.calledWith({
        error: 'Only numbers, letters, periods and underscores allowed'
      })).to.be.true
    })
    it('should return errors if email format is not met', () => {
      UserValidator.validateUserInputs(req5, res)
      expect(res.status.calledOnce).to.be.true
      expect(res.status.calledWith(400)).to.be.true
      expect(res.json.calledOnce).to.be.true
      expect(res.json.calledWith({
        error: 'Use a valid email address'
      })).to.be.true
    })
    it('should return errors if password format is not met', () => {
      UserValidator.validateUserInputs(req6, res)
      expect(res.status.calledOnce).to.be.true
      expect(res.status.calledWith(400)).to.be.true
      expect(res.json.calledOnce).to.be.true
      expect(res.json.calledWith({
        error: 'Password should be atleast 8 characters long, 1 lowercase & uppercase, numeric and special character'
      })).to.be.true
    })
    it('should return null if every input follows the right format', () => {
      const response = UserValidator.validateUserInputs(req7, res)
      expect(response).to.equal(null)
    })
  })
  describe('validateLoginCreds', () => {
    it('should return next()', () => {
      UserValidator.validateLoginCreds(req3, res, next)
      expect(next.calledOnce).to.be.true
    })
  })
})
