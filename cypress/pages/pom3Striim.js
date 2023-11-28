// pom3Striim.js

import { urls, testData } from '../pom3config';

class Striim {
  // Methods to interact with the login page elements
  fillUserName() {
    cy.get('input[name="username"]').type(testData.username);
  }

  fillPassword() {
    cy.get('input[name="password"]').type(testData.password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  // Method to check URL of page
  checkURL(url , timeout = 0 ) {
    cy.url().should('eq', url).wait(timeout) 
  }

  existGreetingForUserWithAppsEmpty() {
    cy.get('div[data-test-id="header--homepage-recent-apps-empty"] h1').eq(0)
      .should('have.text',`Hi ${testData.username}, Welcome to Striim !`)
  }
  clickButtonToCreateNewApp() {
    cy.get('button[data-test-id="create-an-app--button"]').should('exist').click()  
  }
 
  createNewAppFromScratch() {
    cy.get('div#createapp--Start_from_scratch').should('exist').click()  
  }

  addNameForFirstNewApp() {
    cy.get('input[name="name"]').type(testData.nameForFirstNewApp)
    .should('have.value',testData.nameForFirstNewApp) 
  }

  submitNewApp() {
    cy.get('button[data-test-id="submit-app-button"]').should('exist').click()
  }

}

export default new  Striim();
