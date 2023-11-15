
import StriimLoginPage from '../pages/striimLoginPage'

describe('Striim Login Form', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('https://developer.striim.com')
    cy.wait(6000) 
  }) 

    it('should display the login form', () => {
      // Ensure that the login and password fields are present
       StriimLoginPage.existUserName()
       StriimLoginPage.existPassword()
       StriimLoginPage.existLogin()
    }) 

    it('should allow typing into the login and password fields', () => {
      // Check if you can type into the username field
       StriimLoginPage.fillUserName('exampleUsername')

      // Check if you can type into the password field
       StriimLoginPage.fillPassword('examplePassword')
    }) 

    it('should validate the login and password with correct credentials', () => {
      // Correct login and password
       StriimLoginPage.fillUserName('VitaliyP')
       StriimLoginPage.fillPassword('99996vBCMP')

      // Submit the form
       StriimLoginPage.clickLogin()

      // Assuming a successful login and password redirects to the landing page
      // Add assertions to check for successful login/passw or a redirection
       StriimLoginPage.checkURL('https://developer.striim.com/')  
    }) 

    it('should show error on invalid login and password', () => {
      // Incorrect login and password
       StriimLoginPage.fillUserName('incorrectLogin')
       StriimLoginPage.fillPassword('incorrectPassword')
      
      // Submit the form
       StriimLoginPage.clickLogin()

      // Add assertions to check for error messages or a failed login indication
       StriimLoginPage.checkErrorMessage()
    }) 
})