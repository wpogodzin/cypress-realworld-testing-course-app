////////////Installing Cypress and writing your first test

/* 00+++begin
//task: https://learn.cypress.io/testing-your-first-application

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

00+++end */
///////////


/* 01+++begin
//task: https://learn.cypress.io/testing-your-first-application

describe('home page',() => {
  it('the h1 contains the correct text',() => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Testing Next.js Applications with Cypress')
  })
})

01+++end */
///////////


/* 02+++begin
//task: https://learn.cypress.io/testing-your-first-application

describe("testing page",() => {
  it("checking the name in the head",() => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })
})

02+++end */
///////////


/* 03+++begin
//task: https://learn.cypress.io/testing-your-first-application

describe("testing page",() => {
  it("checking the name in the head",() => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })
  it.only("visiting port:3000",() => {
    cy.visit('http://localhost:3000')
    
  })
})

03+++end */
///////////


/* 04+++begin
//task: https://learn.cypress.io/testing-your-first-application

describe("testing page",() => {
  it("checking the name in the head",() => {
    cy.visit("http://localhost:3000")
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })
  it.only("getting element 'dt'",() => {
    cy.visit("http://localhost:3000")
    cy.get("dt")
    
  })
})

04+++end */
///////////

/* 05+++begin
//task: https://learn.cypress.io/testing-your-first-application

describe("testing page",() => {
  it("checking the name in the head",() => {
    cy.visit("http://localhost:3000")
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })
  it.only("getting  first element of 'dt'",() => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(0).contains("4 Courses")
    
  })
})

05+++end */
///////////


/* 06+++begin
//task: https://learn.cypress.io/testing-your-first-application
//task: to check all 'dt' elements(using index in array) and use hook beforeEach

describe("testing page",() => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("checking the name in the head",() => {
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  }) 
  it.only("getting  first element of 'dt'",() => {
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})

06+++end */
///////////



////////////How to test forms & custom Cypress commands

/* 07+++begin
//task: https://learn.cypress.io/testing-your-first-application
//task: custom command; how to use
//!!!! we add in support.command.ts:  return cy.get(`[data-test="${selector}"]`)
//!!!! instead  return cy.get(`[data-test=${selector}]`) although it works
describe("suka",() => {
  it("the h1 contains the correct text", () => {
    cy.visit("http://localhost:3000/")
    cy.getByData('hero-heading').contains(
      "Testing Next.js Applications with Cypress"
    )
  })
})

07 +++end */
///////////


/////////////// How to test multiple pages

/* 08+++begin
//task: https://learn.cypress.io/testing-your-first-application
//task:using context

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
})

08 +++end */
///////////

//https://youtu.be/mGL7rSct3CU how to run cypress in headless mode - to see !!!

//We continue: 
//https://learn.cypress.io/testing-your-first-application/how-to-test-multiple-pages

//How to test multiple pages

/* 09+++begin
//task: https://learn.cypress.io/testing-your-first-application
09 +++end */

describe("Hero page",() => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  context("Courses section",() =>{
    it("Course: Testing Your First Next.js Application",() => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal","/testing-your-first-application")
    })

    it("Course: Testing foundations",() => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal","/testing-foundations")
    })

    it("Course: Cypress Fundamentals",() => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal","/cypress-fundamentals")
    })

  })
})


///////////