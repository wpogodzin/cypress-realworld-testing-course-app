
import HerokuappLoginPage from '../pages/heroku2appLoginPage'

describe('Herokuapp Login Tests using POM (2-nd variant)', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('https://the-internet.herokuapp.com/login') 
  }) 

    it('should display the login form', () => {
      // Ensure that the login and password fields are present
      HerokuappLoginPage.shouldDisplayTheLoginForm()
    }) 

    it('should allow typing into the login and password fields', () => {
      // Check if you can type into the username/password fields
      HerokuappLoginPage.shouldAllowTypingIntoTheLoginAndPasswordFields()
    }) 

    it('should validate the login and password with correct credentials', () => {
      // Correct login and password
      HerokuappLoginPage.shouldValidateTheLoginAndPasswordWithCorrectCredentials() 
    }) 

    it('should show error on invalid login and password', () => {
      // Incorrect login and password
      HerokuappLoginPage.shouldShowErrorOnInvalidLoginAndPassword()
    }) 
})