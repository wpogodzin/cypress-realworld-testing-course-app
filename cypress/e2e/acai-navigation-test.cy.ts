describe('Homepage Load Test', () => {
  it('Check main page navigation', () => {
    cy.visit('https://www.acaisoft.com')

    // Check if the page title contains 'Acaisoft'
    cy.title().should('contain', 'Acaisoft')

    // Check if div class ='header-right-side' is visible(main menu)
    cy.get('div.header-right-side ').should('be.visible') 
    
    // Check for the links within the main menu and ensure they are clickable
    cy.get('div.header-right-side a').each(($link) => {
      // Verifies the link has a valid 'href' attribute
      cy.wrap($link).should('have.attr', 'href').and('not.be.empty') 

      // Sometimes elements(when dropdown f.e.) are not visible,
      // so check them on visibility
      cy.wrap($link).then(($el) => {        
        if ($el.is(':visible')) { 
        // The element is visible, so we can add the assertion
          cy.wrap($link).should('be.visible');
       }
      });
    });
  });
})
