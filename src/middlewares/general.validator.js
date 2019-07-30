class GeneralValidator {

  /**
   * @description This method checks the object passed for the passed properties
   * @param {object} body The body of the request object
   * @param {Array<string>} props The name of the property
   * @returns {array} An array of messages of the missing properties
   */
  static checkEmptyInputs(body, ...props) {
    let messages = []

    props.forEach(prop => {
      if (!body[prop]) {
        messages.push(`Please provide ${prop}.`)
      }
    })

    return messages
  }

  static trimAllInputs(body, ...props) {
    props.forEach(prop => {
      body[prop].trim()
    })
  }

  static validateUsername(username) {
    const usernameRegex = new RegExp('^[0-9A-Za-z_.]+$')
    if (!usernameRegex.test(username)) {
      return false
    }
    return true
  }

  static validateEmailAddress(email) {
    const emailRegex = new RegExp(
      /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/, 'g'
    )
    if (!emailRegex.test(email)) {
      return false
    }
    return true
  }

  static validatePassword(password) {
    const passRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
    )
    if (!passRegex.test(password)) {
      return false
    }
    return true
  }
}

module.exports = GeneralValidator 
