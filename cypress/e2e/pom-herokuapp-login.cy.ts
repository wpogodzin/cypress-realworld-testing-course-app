
import HerokuappLoginPage from '../pages/herokuappLoginPage'

describe('Herokuapp Login Tests', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('https://the-internet.herokuapp.com/login') 
  }) 

    it('should display the login form', () => {
      // Ensure that the login and password fields are present
      HerokuappLoginPage.existUserName()
      HerokuappLoginPage.existPassword()
      HerokuappLoginPage.existLogin()
    }) 

    it('should allow typing into the login and password fields', () => {
      // Check if you can type into the username field
      HerokuappLoginPage.fillUserName('exampleUsername')

      // Check if you can type into the password field
      HerokuappLoginPage.fillPassword('examplePassword')
    }) 

    it('should validate the login and password with correct credentials', () => {
      // Correct login and password
      HerokuappLoginPage.fillUserName('tomsmith')
      HerokuappLoginPage.fillPassword('SuperSecretPassword!')
      // Submit the form
      HerokuappLoginPage.clickLogin()

      // Add assertions to check for successful login/passw or a redirection
      // Assuming a successful login and password redirects to the landing page
      HerokuappLoginPage.checkURL('https://the-internet.herokuapp.com/secure')  
    }) 

    it('should show error on invalid login and password', () => {
      // Incorrect login and password
      HerokuappLoginPage.fillUserName('incorrectLogin')
      HerokuappLoginPage.fillPassword('incorrectPassword')
      
      // Submit the form
      HerokuappLoginPage.clickLogin()

      // Add assertions to check for error messages or a failed login indication
      HerokuappLoginPage.checkErrorMessage()
    }) 
})