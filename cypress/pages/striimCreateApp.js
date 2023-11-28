
class StriimCreateApp {
  // Methods to interact with the login page elements
  existGreetingForUserWithAppsEmpty(username) {
    cy.get('div[data-test-id="header--homepage-recent-apps-empty"] h1').eq(0).should('have.text',`Hi ${username}, Welcome to Striim !`)
  }
  clickButtonToCreateNewApp() {
    cy.get('button[data-test-id="create-an-app--button"]').should('exist').click()  
  }
 
  createNewAppFromScratch() {
    cy.get('div#createapp--Start_from_scratch').should('exist').click()  
  }

  addNameForNewApp(appname) {
    cy.get('input[name="name"]').type(appname).should('have.value',appname) 
  }

  submitNewApp() {
    cy.get('button[data-test-id="submit-app-button"]').should('exist').click()
  }

}

export default new  StriimCreateApp();
