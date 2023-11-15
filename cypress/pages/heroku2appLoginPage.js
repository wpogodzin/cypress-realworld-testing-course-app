
class HerokuappLoginPage {
  // Methods to interact with the login page elements
  // Elements for methods
  elements = {

    existUserName : () => cy.get('input[name="username"]').should('exist'),

    existPassword : () => cy.get('input[name="password"]').should('exist'),

    existLogin : () => cy.get('button[type="submit"]').should('exist'), 

    fillUserName : (username) => cy.get('input[name="username"]').type(username),

    fillPassword :(password) => cy.get('input[name="password"]').type(password),

    clickLogin : () => cy.get('button[type="submit"]').click(),

    checkURL : (url) => cy.url().should('eq', url), 

    checkErrorMessage : () => cy.get('#flash').should('be.visible')
    
  }

  shouldDisplayTheLoginForm(){
    this.elements.existUserName()
    this.elements.existPassword()
    this.elements.existLogin()
  }

  shouldAllowTypingIntoTheLoginAndPasswordFields(){
    this.elements.fillUserName('incorrectLogin')
    this.elements.fillPassword('incorrectPassword') 
  }

  shouldValidateTheLoginAndPasswordWithCorrectCredentials(){
    this.elements.fillUserName('tomsmith')
    this.elements.fillPassword('SuperSecretPassword!')
    this.elements.clickLogin()
    this.elements.checkURL('https://the-internet.herokuapp.com/secure')

  }
  shouldShowErrorOnInvalidLoginAndPassword(){
    this.elements.fillUserName('incorrectLogin')
    this.elements.fillUserName('incorrectPassword')
    this.elements.clickLogin()
    this.elements.checkErrorMessage()
  }


}

export default new HerokuappLoginPage();
