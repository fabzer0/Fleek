import { expect } from 'chai' 
import GeneralValidator from '../general.validator'
import { req1, req2, props } from './__mocks__'


describe('GeneralValidator', () => {
  describe('checkEmptyInputs', () => {
    it('should return error for atleast one input', () => {
      const errors = GeneralValidator.checkEmptyInputs(req1.body, ...props);
      expect(errors).deep.equal([
        'Please provide password.',
        'Please provide country.',
      ]);
    });
    it('should return an empty array if all inputs have been filled', () => {
      const emptyArr = GeneralValidator.checkEmptyInputs(req2.body, ...props);
      expect(emptyArr).deep.equal([]);
    });
  });

  describe('trimAllInputs', () => {
    it('should trim all the inputs', () => {
      const trim = GeneralValidator.trimAllInputs(req2.body, ...props);
      expect(trim).to.equal(true);
    });
  });

  describe('validateUsername', () => {
    it('should return true if correct username format is used', () => {
      const validity = GeneralValidator.validateUsername('rollplanes_');
      expect(validity).to.equal(true);
    });
    it('should return false if wrong username format is used', () => {
      const validity = GeneralValidator.validateUsername('roll#planes');
      expect(validity).to.equal(false);
    });
  });

  describe('validateEmailAddress', () => {
    it('should return true if correct email format is used', () => {
      const validity = GeneralValidator.validateEmailAddress('fabish.apeli@icloud.com');
      expect(validity).to.equal(true);
    });
    it('should return false if wrong email format is used', () => {
      const validity = GeneralValidator.validateEmailAddress('fabish.apeli.@icloud.com');
      expect(validity).to.equal(false);
    });
  });

  describe('validatePassword', () => {
    it('should return true if correct password structure is used', () => {
      const validity = GeneralValidator.validatePassword('Password@123');
      expect(validity).to.equal(true);
    });
    it('should return false if wrong password structure is used', () => {
      const validity = GeneralValidator.validatePassword('password@123');
      expect(validity).to.equal(false);
    });
  });
});
