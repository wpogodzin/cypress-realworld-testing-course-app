// pom3Striim.js

import { urls, testData } from '../pom3config';

class Striim {

  // Methods to interact with the login page elements

  // Selector: bad but no choice
  expectLoginForm(timeOut) {
    cy.get('div.card-content', { timeout: timeOut })
  }

  // Selector: sparingly but no choice
  fillUserName() {
    cy.get('input[name="username"]').type(testData.username);
  }

  // Selector: sparingly but no choice
  fillPassword() {
    cy.get('input[name="password"]').type(testData.password);
  }

  // Selector: sparingly but no choice
  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  // Method to check URL of page
  // !!! it works only with .wait() (not with cy.url({timeout = timeOut}))
  checkURL(url ,timeOut = testData.waitingtimeOutUrlDefault) {
    cy.url().should('eq', url).wait(timeOut)
  }

  // Selector: best
  existGreetingForUserWithAppsEmpty() {
    cy.get('div[data-test-id="header--homepage-recent-apps-empty"] h1').eq(0)
      .should('have.text',`Hi ${testData.username}, Welcome to Striim !`)

  // Selector: best    
  }
  clickButtonCreateNewApp() {
    cy.get('button[data-test-id="create-an-app--button"]').should('exist').click()  
  }

  // Selector: better
  createNewAppFromScratch() {
    cy.get('div#createapp--Start_from_scratch').should('exist').click()  
  }

  // Selector: sparingly but no choice
  addNameFirstNewApp() {
    cy.get('input[name="name"]').type(testData.nameFirstNewApp)
    .should('have.value',testData.nameFirstNewApp) 
  }

  // Selector: best
  submitNewApp() {
    cy.get('button[data-test-id="submit-app-button"]').should('exist').click()
  }

}

export default new  Striim();
