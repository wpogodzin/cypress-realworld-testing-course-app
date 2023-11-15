/* 01+++begin
//task:https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands
//task: Checking 'X' and 'O' appearing by queue and checking that it's impossible to click on the same already clicked button and change it

describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })
  context("checking 'X' and 'O' appearing by queue and checking that it's impossible to click on same clicked button and change it",()=>{
    it("let's go", () => {
      cy.get("button").eq(0).should("exist").click()
      cy.get("button").eq(0).contains("X")  
      cy.get("button").eq(0).should("exist").click()
      cy.get("button").eq(0).contains("X")  
   
      cy.get("button").eq(1).should("exist").click()
      cy.get("button").eq(1).contains("O")    
      cy.get("button").eq(1).should("exist").click()
      cy.get("button").eq(1).contains("O") 

      cy.get("button").eq(2).should("exist").click()
      cy.get("button").eq(2).contains("X") 
      cy.get("button").eq(2).should("exist").click()
      cy.get("button").eq(2).contains("X")      
      
      cy.get("button").eq(3).should("exist").click()
      cy.get("button").eq(3).contains("O")
      cy.get("button").eq(3).should("exist").click()
      cy.get("button").eq(3).contains("O")
      
      cy.get("button").eq(4).should("exist").click()
      cy.get("button").eq(4).contains("X")
      cy.get("button").eq(4).should("exist").click()
      cy.get("button").eq(4).contains("X")      
    
      cy.get("button").eq(5).should("exist").click()
      cy.get("button").eq(5).contains("O")
      cy.get("button").eq(5).should("exist").click()
      cy.get("button").eq(5).contains("O")      
    
      cy.get("button").eq(6).should("exist").click()
      cy.get("button").eq(6).contains("X")
      cy.get("button").eq(6).should("exist").click()
      cy.get("button").eq(6).contains("X")      
    
      cy.get("button").eq(7).should("exist").click()
      cy.get("button").eq(7).contains("O") 
      cy.get("button").eq(7).should("exist").click()
      cy.get("button").eq(7).contains("O")  
    
      cy.get("button").eq(8).should("exist").click()
      cy.get("button").eq(8).contains("X")
      cy.get("button").eq(8).should("exist").click()
      cy.get("button").eq(8).contains("X")
    })  
  })  
})

01+++end */
///////////

/* 02+++begin
//task:checking tic-tac-toe
//task: Checking 'X' and 'O' appearing by queue and checking that it's impossible to click on the same already clicked button and change it
//task: use reading the value of button after clickings and compare results(equal or non-equal) in cycle


describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  }) 
  it(("trying to read the value of button using 'invoke'"),() => {
  let buttonText
      cy.get("button").eq(1).should("exist").click().contains('X')
        .invoke('text').then((text) => {
         buttonText = text;
        });
        cy.log('Button text is: ' + buttonText) 
       
    
      cy.get("button").eq(1).contains("X")    
      
    })  
      
    })  
  02+++end */

 /* 03+++begin
 //task:checking tic-tac-toe
 //task: Checking  if buttons are empty before start of a game

  describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  }) 
  it(("to check if 9 buttons' values are nulls before start"),() => {

    //flag of null,if exists for a button,button is ready for play
    let nullValue = true

    //clicking button '0'(before cycle of checking) 
    //to check if test works correct(board is not ready)
    cy.get("button").eq(0).should("exist").click()

    //cycle of checking button text
    for (let i = 0; i < 9; i++) {
      cy.get("button").eq(i).should("exist")
        .invoke('text').then((initialValue) => {    
          //if button != null flag 'nullValue' is 'false'
          if (initialValue !== '') {
            nullValue = false
          }
          cy.log(`initialValue of ${i} button is ${initialValue}, nullValue is ${nullValue}`)
      })
    }
    //results in log
    if (nullValue === true) {
      cy.log ('All buttons(9) are ready for game')
    } else {
      cy.log ('Minimum one button is not equal null')
    }
      
  })  
})
 03++end */
//cy.log(`button ${i} is null and ready for the game start`)


 /* 04+++begin
 //task:checking tic-tac-toe
 //task: 02+++ + cheking two clicks in one chain
 
describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })

  it(("checking if you can use the same button twice"),() => {

    for(let i = 0; i < 9; i++) {

      // 1-st click on 'i' button
      cy.get("button").eq(i).should("exist").click().invoke('text')
        .then((click1) => {
          cy.log(`Click1 for button ${i} is ${click1}`)

          // repeated 2-nd click on the same 'i' button
          cy.get("button").eq(i).click().invoke('text')
            .then((click2) => {
              cy.log(`Click2 for button ${i} is ${click2}`)

              //Comparing 1-st and 2-nd click button value
              if (click1 === click2) {
                cy.log (`Super!!!Repeated click hasn't changed 
                the button ${i} value`)} else {
                cy.log (`STOP!!!Repeated click has changed 
                already clicked button ${i} value from   ${click1} on ${click2}`) 
              }
            })
        })       
    }
  })
})  
 04+++end */    
 ///////////    


 /* 05+++begin
 //task:checking tic-tac-toe
 //task: 04+++ + cheking if game is over
 04+++end */
  describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })

  it(("checking if you can use the same button" +  
      "twice before game is over"),() => {
    let thereIsWinner = false

    for(let i = 0; i < 9; i++) {

      //Begin:This block doesn't work when 'thereIsWinner becomes 'true'(i=6)
      //and testing(when i=i+1=7) must stopped, but at the beginning
      //of cycle 'for' unexpectedly 'thereIsWinner' becomes false'.I don't know why?
      //
      //    if(thereIsWinner) {
      //    cy.log(`Testing stopped on ${i} step`)
      //    break
      //    } 
      //End:This block doesn't work when 'thereIsWinner' becomes 'true'(i=6)

      //1-st click on 'i' button
      cy.log(`Button ${i}, Winner before 1-st clicking: ${thereIsWinner}`)
      cy.get("button").eq(i).should("exist").click().invoke('text')
        .then((click1) => {
          cy.log(`Click1 for button ${i} puts ${click1}`)

          //if div class='status' has 'Winner'('XXX' or 'OOO')
          //indicator 'thereIsWinner' becomes 'true'
          cy.get('div.status').invoke('text')
            .then((text) => {
                if(text.includes('Winner')) {
                  thereIsWinner = true
                  cy.log(`Status of game is ${text},Winner: ${thereIsWinner}`)  
                }


                // If there is a winner, we should stop the test
                if ( thereIsWinner) {
                  cy.log (`Program stopped on ${i} button`)
                  cy.wrap(false).should("be.true")
                }                
            })

          // if no winner repeated 2-nd click on the same 'i' button
          cy.get("button").eq(i).click().invoke('text')
            .then((click2) => {
              cy.log(`Click2 for button ${i} puts ${click2},`+  
              `Winner after 2-nd clicking: ${thereIsWinner}`)

              //Comparing 1-st and 2-nd click button value
              if (click1 === click2) {
                cy.log (`Super!!!Repeated click hasn't changed 
                the button ${i} value`)} else {
                cy.log (`STOP!!!Repeated click has changed 
                already clicked button ${i} value from   ${click1} on ${click2}`)
                cy.wrap(false).should("be.true") 
              }              
            })
        })       
    }
  })
}) 



   
 ///////////    
/*  
  describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("checking if you can use the same button twice", () => {
    let thereIsWinner = false;

    for (let i = 0; i < 9; i++) {
      // 1-st click on 'i' button
      cy.get("button")
        .eq(i)
        .should("exist")
        .click()
        .invoke("text")
        .then((click1) => {
          cy.log(`Click1 for button ${i} puts ${click1}`);

          cy.get("div.status").invoke("text").then((text) => {
            if (text.includes("Winner")) {
              thereIsWinner = true;
              cy.log(`Status of game is ${text}, Winner: ${thereIsWinner}`);
            }

            // If there is a winner, we can conditionally fail the test
            if (thereIsWinner) {
              cy.log(`Testing stopped on ${i} step`);
              cy.wrap(false).should("be.true"); // Fails the test
            }

            // Repeated 2nd click on the same 'i' button
            cy.get("button")
              .eq(i)
              .click()
              .invoke("text")
              .then((click2) => {
                cy.log(`Click2 for button ${i} is ${click2}, Winner after 2nd clicking: ${thereIsWinner}`);

                // Comparing 1st and 2nd click button value
                if (click1 === click2) {
                  cy.log(`Super!!! Repeated click hasn't changed the button ${i} value`);
                } else {
                  cy.log(`STOP!!! Repeated click has changed already clicked button ${i} value from ${click1} to ${click2}`);
                }
              });
          });
        });
    }
  });
});
*/

