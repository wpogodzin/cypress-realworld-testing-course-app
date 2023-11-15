beforeEach(() => {
  // Visit the login page
  cy.visit('https://the-internet.herokuapp.com/login') 
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
  cy.get('input[name="username"]').type('tomsmith').should('have.value', 'tomsmith') 
  cy.get('input[name="password"]').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!') 
  
  // Submit the form
  cy.get('button[type="submit"]').click() 

  // Add assertions to check for successful login, e.g., a welcome message or a redirection
  cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')  // Assuming a successful login redirects to the home page
}) 

it('should show error on invalid login and password', () => {
  // Incorrect login and password
  cy.get('input[name="username"]').type('incorrectUsername').should('have.value', 'incorrectUsername') 
  cy.get('input[name="password"]').type('incorrectPassword').should('have.value', 'incorrectPassword') 
  
  // Submit the form
  cy.get('button[type="submit"]').click() 

  // Add assertions to check for error messages or a failed login indication
  cy.get('#flash').should('be.visible') 
}) 