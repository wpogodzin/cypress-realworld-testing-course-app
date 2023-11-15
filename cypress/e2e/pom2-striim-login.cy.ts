
import StriimLoginPage from '../pages/striim2LoginPage'

describe('Striim Login Tests using POM (2-nd variant)', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('https://developer.striim.com') 
    cy.wait(6000)
  }) 

    it('should display the login form', () => {
      // Ensure that the login and password fields are present
      StriimLoginPage.shouldDisplayTheLoginForm()
    }) 

    it('should allow typing into the login and password fields', () => {
      // Check if you can type into the username/password fields
      StriimLoginPage.shouldAllowTypingIntoTheLoginAndPasswordFields()
    }) 

    it('should validate the login and password with correct credentials', () => {
      // Correct login and password
      StriimLoginPage.shouldValidateTheLoginAndPasswordWithCorrectCredentials() 
    }) 

    it('should show error on invalid login and password', () => {
      // Incorrect login and password
      StriimLoginPage.shouldShowErrorOnInvalidLoginAndPassword()
    }) 
})