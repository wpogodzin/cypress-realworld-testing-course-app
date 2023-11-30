import Striim from '../pages/pom3Striim'
import { urls, testData } from '../pom3config';


describe("How to create first new app",() => {

  beforeEach (() => {

    cy.visit('https://developer.striim.com')
    
  })

  it('making first new app for a new client',() => {
   
    // 1.Mistake handling when automatically testing(only)!!!
    cy.on('uncaught:exception', (err, runnable) => {  
      if(err.message.includes('s.ui.password.val')){
        console.log('!!!!!We pass mistake with element "s.ui.password.val"!!!!!')
        return false;
      }
        return true;
      })

    // 2.We have to wait login form!!!
    Striim.expectLoginForm(testData.timeOutLoginForm) 

    //// Login/Password Form
    // Input login and password
    Striim.fillUserName()
    Striim.fillPassword()
    // Submit the form
    Striim.clickLogin()


    // Loading and checking of loading landing page
    // 3.Have to wait landing page!!!
    Striim.checkURL(urls.urlLandingPage,testData.timeOutLandingPage)

    // If exist greeting (in case there is no any apps)?
    Striim.existGreetingForUserWithAppsEmpty()

    // Click  button to create new app if it exists
    Striim.clickButtonCreateNewApp()

    // Check URL for creating new app
    Striim.checkURL(urls.urlCreateNewApp)

    // Find element for creating new app from scratch and click
    Striim.createNewAppFromScratch()

    // Check URL for the page where client gives name to new app
    Striim.checkURL(urls.urlCreateNameNewApp)

    // Giving name to new app
    Striim.addNameFirstNewApp()

    // Click button for submit new app
    Striim.submitNewApp()

    // Check URL for getting started with new app 
    // (4.) Url is OK, but final picture is different
    // (when tested automatically):
    //  necessary page appears for one second and then disappears
    // (more details: only left columns with instruments disappears)
    // 
    // Now is OK,when using .wait(1000)
    // when using timeout = 5000(4000 stand + 1000), 
    // the result is bad with mistake(see above)
    Striim.checkURL(urls.urlGettingStartedNewApp)
    
  })

})

