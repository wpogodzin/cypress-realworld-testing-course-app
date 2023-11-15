describe("testing acaisoft.com",() => {
  beforeEach(() => {
    cy.visit("https://www.acaisoft.com")
  })

  context("checking 3 'CONTACT US' buttons at 'Home' page",() =>{

      it("1 'CONTACT US'", () => {
        // Click the "CONTACT US" button
        cy.get('.button-primary-transparent.relative.ml-80.contact-us-button.w-inline-block').contains('CONTACT US').click()
      
        // Wait for the pathname to change to '/'
        cy.location('pathname').should('equal', '/')
      
        // Continue with additional assertions or actions      
        // Now, assert the URL change to '#Download-App'
        cy.url().should('equal', 'https://www.acaisoft.com/#Download-App')
      })
     
    it("2 'CONTACT US' - white",() => {
      cy.get('.white-button.mt-40.button-book-a-call.w-button').contains('CONTACT US').click()
      cy.location("pathname").should("equal","/")
    })

    it("3 'CONTACT US'- at the bottom",() => {  
      cy.get('.white-button.button-book-a-call.w-button').contains('CONTACT US').click()
      cy.location("pathname").should("equal","/")
    })
  })


context("checking 2 'CONTACT US' buttons at 'About us' page",() =>{
  
    it("1 'CONTACT US'", () => {
      // Click the "CONTACT US" button and check the pathname
      cy.get(".nav-link-transparent.w-nav-link").contains('About us').click()
      cy.location("pathname").should("equal","/about-us")
 
      // Click the "CONTACT US" button
      cy.get('.button-primary-transparent.relative.ml-80.contact-us-button.w-inline-block').contains('CONTACT US').click()
    
      // Wait for the pathname to change to '/about-us'
      cy.location("pathname").should("equal","/about-us")
    
      // Continue with additional assertions or actions    
      // Now, assert the URL change to '/about-us#Download-App'
      cy.url().should('equal', 'https://www.acaisoft.com/about-us#Download-App')

      // Visit url with wrong '#...' but result is good
      cy.visit("https://www.acaisoft.com/about-us#Download-Ap")
      cy.location("pathname").should("equal","/about-us")
      cy.url().should('equal', 'https://www.acaisoft.com/about-us#Download-Ap')
    })
////////
it("2 'CONTACT US'- at the bottom", () => {
  // Click the "CONTACT US" button and check the pathname
  cy.visit("https://www.acaisoft.com/about-us")
  cy.get(".white-button.button-book-a-call.w-button").contains('CONTACT US').click()
  cy.location("pathname").should("equal","/about-us")
  //Here pathname has not changed (no other url appears after pathname )
  cy.url().should('equal', 'https://www.acaisoft.com/about-us')
  
})
})
///////
context("checking 1 'CONTACT US' buttons at 'Carrier' page",() =>{
  
  
////////
it("1 'CONTACT US'", () => {
// Click the "CONTACT US" button and check the pathname
cy.visit("https://www.acaisoft.com/careers")
cy.get('.button-primary-transparent.relative.ml-80.contact-us-button.w-inline-block').contains('CONTACT US').click()
cy.location("pathname").should("equal","/careers")
//Here pathname has changed by other url 
cy.url().should('equal', 'https://www.acaisoft.com/careers#Download-App')

})
})

})