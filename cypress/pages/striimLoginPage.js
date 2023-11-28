
class StriimLoginPage {
  // Methods to interact with the login page elements
  existUserName() {
    cy.get('input[name="username"]').should('exist');
  }

  existPassword() {
    cy.get('input[name="password"]').should('exist');
  }

  existLogin() {
    cy.get('button[type="submit"]').should('exist');
  }

  fillUserName(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  // Method to check URL of page
  checkURL(url , timeout = 0 ) {
    cy.url().should('eq', url).wait(timeout) 
  }

  // Method to check for the visibility of the error message
  checkErrorMessage() {
    cy.get('div.message.error').should('be.visible');
  }

}

export default new  StriimLoginPage();
