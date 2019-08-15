import GeneralValidator from './general.validator'

class UserValidator {
  static registrationInputs(req, res, next) {
    const { body } = req
    const emptyInputs = GeneralValidator.checkEmptyInputs(
      body, 'username', 'email', 'password', 'country', 'city'
    )

    if (emptyInputs.length > 0) {
      return res.status(400).json({
        errors: emptyInputs
      })
    }

    const trimmed = GeneralValidator.trimAllInputs(body, 'username', 'email', 'password', 'country', 'city')
    const validation = UserValidator.validateUserInputs(req, res)
    if (validation === null && trimmed) {
      return next()
    }
    return null
  }

  static validateUserInputs(req, res) {
    const { body: { username, email, password } } = req
    const usernameValidity = GeneralValidator.validateUsername(username)
    if (!usernameValidity) {
      return res.status(400).json({
        error: 'Only numbers, letters, periods and underscores allowed'
      })
    }

    const emailValidity = GeneralValidator.validateEmailAddress(email)
    if (!emailValidity) {
      return res.status(400).json({
        error: 'Use a valid email address'
      })
    }

    const passwordValidity = GeneralValidator.validatePassword(password)
    if (!passwordValidity) {
      return res.status(400).json({
        error: 'Password should be atleast 8 characters long, 1 lowercase & uppercase, numeric and special character'
      })
    }

    return null
  }

  static validateLoginCreds(req, res, next) {
    const { body } = req
    const emptyInputs = GeneralValidator.checkEmptyInputs(
      body, 'username', 'password'
    )

    if (emptyInputs.length > 0) {
      return res.status(400).json({
        errors: emptyInputs
      })
    }
    GeneralValidator.trimAllInputs(body, 'username', 'password')
    return next()
  }
}

export default UserValidator
