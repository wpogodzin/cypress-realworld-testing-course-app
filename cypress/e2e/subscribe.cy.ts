//How to test forms


/* 01+++begin
//task:https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands

describe("Newsletter Subscribe Form",() => {
  beforeEach(() => {
     cy.visit("http://localhost:3000")
  })   
  it ("allows users to subscribe to the email list",() => {
    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })
})

01+++end */
///////////

/* 02+++begin
//task:https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands

describe("Newsletter Subscribe Form",() => {
  beforeEach(() => {
     cy.visit("http://localhost:3000")
  })   
  it ("allows users to subscribe to the email list",() => {
    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it ("does NOT allow an invalid email address",() => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
})

02+++end */
///////////


/* 03+++begin
//task:https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands

describe("Testing e-mail form",() => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

    it("if e-mail having subscribed then this e-mail is forbidden to subscribe again",() => {
      cy.getByData("email-input").type("john@example.com")
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message")
        .should("exist")
        .contains("already exists. Please use a different email address.")

    })
})

03+++end */
///////////

/* 04+++begin
//task:https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands
//task:final Spec File Code

describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow already subscribed email addresses", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  })
})

04+++end */
///////////