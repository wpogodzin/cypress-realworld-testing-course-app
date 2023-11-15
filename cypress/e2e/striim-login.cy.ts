
describe('Login Form', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://developer.striim.com') 
    cy.wait(5000)
  }) 

  it('should display the login form', () => {
    // Ensure that the login and password fields are present
    cy.get('input[name="username"]').should('exist') 
    cy.get('input[name="password"]').should('exist') 
    cy.get('button[type="submit"]').should('exist') 
  }) 

  it('should allow typing into the login and password fields', () => {
    // Check if you can type into the username field
    cy.get('input[name="username"]').type('exampleUsername').should('have.value', 'exampleUsername') 

    // Check if you can type into the password field
    cy.get('input[name="password"]').type('examplePassword').should('have.value', 'examplePassword') 
  }) 

  it('should validate the login and password with correct credentials', () => {
    // Correct login and password
    cy.get('input[name="username"]').type('Vitaliy').should('have.value', 'Vitaliy') 
    cy.get('input[name="password"]').type('99996vBCMP').should('have.value', '99996vBCMP') 
    
    // Submit the form
    cy.get('button[type="submit"]').click() 

    // Add assertions to check for successful login, e.g., a welcome message or a redirection
    cy.url().should('eq', 'https://developer.striim.com/')  // Assuming a successful login redirects to the home page
  }) 

  it('should show error on invalid login and password', () => {
    // Incorrect login and password
    cy.get('input[name="username"]').type('incorrectUsername').should('have.value', 'incorrectUsername') 
    cy.get('input[name="password"]').type('incorrectPassword').should('have.value', 'incorrectPassword') 
    
    // Submit the form
    cy.get('button[type="submit"]').click() 

    // Add assertions to check for error messages or a failed login indication
    cy.get('div.message.error').should('be.visible') 
  }) 
}) 
