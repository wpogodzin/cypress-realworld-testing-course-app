import Striim from '../pages/pom3Striim'
import { urls, testData } from '../pom3config';


describe("How to create first new app",() => {

  beforeEach (() => {
    // 1.Have to wait!!!
     // Variables
    cy.visit('https://developer.striim.com').wait(testData.timeOut)
    
  })

  it('making first new app',() => {
   
    // 2.Mistake handling
    cy.on('uncaught:exception', (err, runnable) => {  
      if(err.message.includes('s.ui.password.val')){
        console.log('!!!!!We pass mistake with element "s.ui.password.val"!!!!!')
        return false;
      }
        return true;
      })

    //// Login/Password Form
    // Input login and password
    Striim.fillUserName()
    Striim.fillPassword()
    // Submit the form
    Striim.clickLogin()
    // Assuming a successful login and password redirects to the landing page
    Striim.checkURL(urls.urlLoginForm)
      
    // Loading and checking of loading landing page
    // 3.Have to wait!!!
    Striim.checkURL(urls.urlLandingPage,testData.timeOut)

    // If exist greeting when there is no any apps?
    Striim.existGreetingForUserWithAppsEmpty()

    //Click  button to create new app if it exists
    Striim.clickButtonToCreateNewApp()

    //Check URL for creating new app
    Striim.checkURL(urls.urlCreateNewApp)

    //Find element for creating from scratch and click
    Striim.createNewAppFromScratch()

    //Check URL for page with giving name to new app
    Striim.checkURL(urls.urlCreateNameForNewApp)

    //Name app
    Striim.addNameForFirstNewApp()

    //Click button for submit new app
    Striim.submitNewApp()

    //Check URL for work with new app :Url is OK, but picture is different(without left column - only in test)
    Striim.checkURL(urls.urlGettingStartedWithNewApp)
    
  })

})

