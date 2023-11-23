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
    cy.get('#nav--button-monitor').should('have.text','Monitor')
    cy.get('.jss82 > .MuiTypography-h1').should('have.text',`Hi ${logIn}, Welcome to Striim !`)

  })

})




