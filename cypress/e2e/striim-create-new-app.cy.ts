describe("How to display #landing page",() => {

  beforeEach (() => {
    cy.visit('https://developer.striim.com')
    // 1.Have to wait!!!
    cy.wait(7000)
  })

  it('login actions + handling of mistake + landing page',() => {
    // Variables
    let logIn = 'VitaliyP'
    let passWord = '99996vBCMP'

    // 2.Mistake handling
    cy.on('uncaught:exception', (err, runnable) => {  
      if(err.message.includes('s.ui.password.val')){
        console.log('We pass mistake with element "s.ui.password.val"')
        return false;
      }
        return true
      })

    // Login form 
    cy.get('input[name="username"]').type(`${logIn}`).should('have.value',`${logIn}`)
    cy.get('input[name="password"]').type(`${passWord}`).should('have.value',`${passWord}`)
    cy.get('button[type ="submit"').click()
    cy.url().should('eq','https://developer.striim.com/')

    // Landing page
    // 3.Have to wait!!!
    cy.wait(7000)
    cy.url().should('include', 'https://developer.striim.com/#landing')


    cy.get('h1').eq(0).should('have.text',`Hi ${logIn}, Welcome to Striim !`)
    // or this
    cy.get('div[data-test-id="header--homepage-recent-apps-empty"] h1').eq(0).should('have.text',`Hi ${logIn}, Welcome to Striim !`)

    //Click  button to create new app if it exists
    cy.get('button[data-test-id="create-an-app--button"]').should('exist').click()

    //Check URL for creating new app
    cy.url().should('eq','https://developer.striim.com/#create-app')

    //Find element for creating from scratch and click
    cy.get('div#createapp--Start_from_scratch').should('exist').click()

    //Check URL for page with giving name to new app
    cy.url().should('eq','https://developer.striim.com/#create-app/name-app')

    //Name app
    cy.get('input[name="name"]').type(`qqqq`).should('have.value',`qqqq`)

    //Click button for submit new app
    cy.get('button[data-test-id="submit-app-button"]').should('exist').click()

    //Check URL for work with new app :Url is OK, but picture is different
    cy.url().should('eq','https://developer.striim.com/#flow/VitaliyP.qqqq')
    
  })

})

