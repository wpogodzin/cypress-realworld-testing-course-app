describe("Testing 'Conact Us' form",() => {
  
    
  
  context("Testing 'Name','E-mail','Phone','Message' sections",() =>{
    it("Testing 'Message' section",() => {

// "Name-3","E-mail-3","Phone-3","Message-3"
// Replace 'form' with the actual selector for your form
    cy.visit("https://acaisoft.com")

// Check if the input field with a specific ID exists
cy.get('form').find('#Name-3').should('exist');
 


// Check if the input field is enabled and not disabled
cy.get('form').find('#Name-3').should('not.be.disabled');

// Check if the input field is visible
//cy.get('form').find('#Name-3').should('be.visible');

// Type text into the input field
cy.get('form').find('#Name-3').type('Hello, Cypress');

// Verify that the input field's value has changed
cy.get('form').find('#Name-3').should('have.value', 'Hello, Cypress')

// Clear the input field
cy.get('form').find('#Name-3').clear();

// Verify that the input field is now empty
cy.get('form').find('#Name-3').should('have.value', '');

// Type new text into the input field
cy.get('form').find('#Name-3').type('New Text');

// Verify that the input field's value has changed
cy.get('form').find('#Name-3').should('have.value', 'New Text');
})
})
})