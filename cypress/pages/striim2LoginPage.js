// For Herokuapp Login Tests using POM (2-nd variant)

class StriimLoginPage {
 
  // Elements for methods

  elements = {

    existUserName : () => cy.get('input[name="username"]').should('exist'),

    existPassword : () => cy.get('input[name="password"]').should('exist'),

    existLogin : () => cy.get('button[type="submit"]').should('exist'), 

    fillUserName : (username) => cy.get('input[name="username"]').type(username),

    fillPassword :(password) => cy.get('input[name="password"]').type(password),

    clickLogin : () => cy.get('button[type="submit"]').click(),

    checkURL : (url) => cy.url().should('eq', url), 

    checkErrorMessage : () => cy.get('div.message.error').should('be.visible')
    
  }
  
  // Methods to interact with the login page elements

  shouldDisplayTheLoginForm(){
    this.elements.existUserName()
    this.elements.existPassword()
    this.elements.existLogin()
  }

  shouldAllowTypingIntoTheLoginAndPasswordFields(){
    this.elements.fillUserName('exampleLogin')
    this.elements.fillPassword('examplePassword') 
  }

  shouldValidateTheLoginAndPasswordWithCorrectCredentials(){
    this.elements.fillUserName('VitaliyP')
    this.elements.fillPassword('99996vBCMP')
    this.elements.clickLogin()
    this.elements.checkURL('https://developer.striim.com/')
  }

  shouldShowErrorOnInvalidLoginAndPassword(){
    this.elements.fillUserName('incorrectLogin')
    this.elements.fillUserName('incorrectPassword')
    this.elements.clickLogin()
    this.elements.checkErrorMessage()
  }

}

export default new StriimLoginPage()
