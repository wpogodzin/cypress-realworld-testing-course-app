import StriimLoginPage from '../pages/striimLoginPage'
import StriimCreateApp from '../pages/striimCreateApp'

describe("How to display #landing page",() => {

  beforeEach (() => {
    // 1.Have to wait!!!
     // Variables
    let timeOut = 10000
    cy.visit('https://developer.striim.com').wait(10000)
    
  })

  it('making first new app',() => {
    let logIn = 'VitaliyP'
    let passWord = '99996vBCMP'
    let urlLoginForm = 'https://developer.striim.com/'
    let urlLandingPage = 'https://developer.striim.com/#landing'
    let urlCreateNewApp = 'https://developer.striim.com/#create-app'
    let urlCreateNameForNewApp = 'https://developer.striim.com/#create-app/name-app'
    let urlForWorkWithNewApp = 'https://developer.striim.com/#flow/VitaliyP.qqqq'
    let nameForNewApp = 'qqqq' 
    let timeOut = 10000
   
    // 2.Mistake handling
    cy.on('uncaught:exception', (err, runnable) => {  
      if(err.message.includes('s.ui.password.val')){
        console.log('We pass mistake with element "s.ui.password.val"')
        return false;
      }
        return true;
      })

    //// Login/Password Form
    // Input login and password
    StriimLoginPage.fillUserName(`${logIn}`)
    StriimLoginPage.fillPassword(`${passWord}`)
    // Submit the form
    StriimLoginPage.clickLogin()
    // Assuming a successful login and password redirects to the landing page
    StriimLoginPage.checkURL(`${urlLoginForm}`)
      
    // Loading and checking of loading landing page
    // 3.Have to wait!!!
    StriimLoginPage.checkURL(`${urlLandingPage}`,timeOut)

    // If exist greeting when there is no any apps?
    StriimCreateApp.existGreetingForUserWithAppsEmpty(`${logIn}`)

    //Click  button to create new app if it exists
    StriimCreateApp.clickButtonToCreateNewApp()

    //Check URL for creating new app
    StriimLoginPage.checkURL(`${urlCreateNewApp}`)

    //Find element for creating from scratch and click
    StriimCreateApp.createNewAppFromScratch()

    //Check URL for page with giving name to new app
    StriimLoginPage.checkURL(`${urlCreateNameForNewApp}`)

    //Name app
    StriimCreateApp.addNameForNewApp(`${nameForNewApp}`)

    //Click button for submit new app
    StriimCreateApp.submitNewApp()

    //Check URL for work with new app :Url is OK, but picture is different(without left column - only in test)
    StriimLoginPage.checkURL(`${urlForWorkWithNewApp}`)
    
  })

})

