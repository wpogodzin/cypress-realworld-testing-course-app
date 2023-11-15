 /* 01+++begin
 //task:checking tic-tac-toe
 //task: cheking if game is over or draw
 
 describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  })

  it(("checking if game is over or draw"),() => {
    let thereIsWinner = false
    //Copy of Board
    let set = ''
    let boardArray = [null,null,null,null,null,null,null,null,null]
    let winnerIndex = [[0,1,2],
                       [3,4,5],
                       [6,7,8],
                       [0,3,6],
                       [1,4,7],
                       [2,5,8],
                       [0,4,8],
                       [2,6,6]]
    //1 cycle                   
    for(let i = 0; i < 9; i++) {

      //1-st click on 'i' button
     
      cy.get("button").eq(i).should("exist").click().invoke("text")
        .then((sign) => {
          cy.log(sign)
          //2 cycle: copying 
          for(let i = 0; i < 9; i++) {
            cy.get("button").eq(i).invoke('text')
              .then((squareText) => {
                boardArray[i] = squareText 
                cy.log(`boardArray[${i}] = ${boardArray[i]}`)
            })
          }
          //3 cycle: is there a winning 'XXX'/'OOO' combination
          for(let i = 0; i < 8; i++) {
            set = `${boardArray[winnerIndex[i][0]]}` + `${boardArray[winnerIndex[i][1]]}` + `${boardArray[winnerIndex[i][2]]}`
            cy.log(set)
          }
      })    
          /*
          //if div class='status' has 'Winner'('XXX' or 'OOO')
          //indicator 'thereIsWinner' becomes 'true'
          cy.get('div.status').invoke('text')
            .then((text) => {
                if(text.includes('Winner')) {
                  thereIsWinner = true
                  cy.log(`Status of game is ${text},Winner: ${thereIsWinner}`)  
                }
          */

import { raise } from "xstate/lib/actions";

          /*
                // If there is a winner, we should stop the test
                if ( thereIsWinner) {
                  cy.log (`Program stopped on ${i} button`)
                  cy.wrap(false).should("be.true")
                }                
            })
          
         
          
               
    }
  })
}) 
01+++end */


   
 ///////////    

 //01+++begin
 //task:checking tic-tac-toe
 //task: version 2: cheking if game is over or draw (version 1) +
 //task: + searching for headline:'Winner'/'Draw'
 //01+++end */
describe("Checking tic-tac-toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("checking if game is over or draw", () => {
    let sign = ''
    let randomSequence = [] // Copy of Board
    let isThereWinner = false
    let set = ''
    let signThree = ''
    let boardArray = [null, null, null, null, null, null, null, null, null];
    let winnerIndexCombs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // begin: Random generating array of moves
    function getRandomSequence() {
      const sequence = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      const randomSequence = [];
    
      for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * sequence.length);
        const selectedNumber = sequence.splice(randomIndex, 1)[0];
        randomSequence.push(selectedNumber);
      }
    
      return randomSequence
    }
    
    randomSequence = getRandomSequence();
    cy.log(`sequence of moves: ${JSON.stringify(randomSequence)}`)
    // end: Random generating array of moves 

    // Cycle_1 : moves of players
    for (let i = 0; i < 9; i++) {
      //  click on 'i' button from randomSequence
      cy.get("button")
        .eq(randomSequence[i])
        .should("exist")
        .click()
      // reading  'sign'(X/O)  
        .invoke("text")
        .then((signOfClicling) => {
          sign = signOfClicling
          signThree = sign.repeat(3)
          cy.log(`cycle_1: clicking a button: move ${randomSequence[i]},` + `  sign: ${sign}`);

          // Cycle_2: after every move copying values of Board to boardArray
          cy.log('Cycle_2: boardArray values')          
          for (let j = 0; j < 9; j++) {
            cy.get("button")
              .eq(j)
              .invoke("text")
              .then((squareText) => {
                boardArray[j] = squareText;
                cy.log(`value square[${j}] = ${boardArray[j]}`);
              });
          }

        // begin:!!!  Very important to make cyrcle 3 after cycle 2
        }).then(() => {
        // end:!!!!!  Very important to make cyrcle 3 after cycle 2 

          // 3rd cycle: is there a winning 'XXX'/'OOO' combination or Draw
          cy.log(` cycle_3: searching for combination   ${signThree}`)          
          for (let k = 0; k < 8; k++) {

            // begin: 1-st version it's easier to understand
            set =
              `${boardArray[winnerIndexCombs[k][0]]}` +
              `${boardArray[winnerIndexCombs[k][1]]}` +
              `${boardArray[winnerIndexCombs[k][2]]}`;
            // end:   1-st version it's easier to understand 

            cy.log(`fact result of ${k} comb is:  ${set}`);

            // begin: 2-nd version of 'set' above it's more difficult to understand for me)
            //  let set = ''
            //  for(let l = 0;l < 3; l++) {
            //  set = set + `${boardArray[winnerIndexCombs[k][l]]}`              
            //  }
            // end: 2-nd version of 'set' above it's more difficult to understand for me)
          
            // Win
            if (set == signThree) {
                 isThereWinner = true
                 
                 cy.get("div.status").invoke("text").then((text) => {
                 if (text.includes(`Winner: ${sign}`)) {
                   cy.log(`This game ended correctly! Winner: ${sign}, winning indices: ${winnerIndexCombs[k]},right headline: ${text}`);
                   } else {
                   cy.log(`Test failed!!! Winner: ${sign}, winning indices: ${winnerIndexCombs[k]}, wrong headline: ${text}`);
                 }
          })
                 
                 
            }
            // Draw
            if( isThereWinner === false && i == 8 && k == 7)  {
              cy.get("div.status").invoke("text").then((text) => {
                if (text.includes(`Draw`)) {
                  cy.log(`This game ended correctly! No winner, right headline: ${text}`);
                  } else {
                  cy.log(`Test failed!!! No winner, wrong headline: ${text}`);
                }
              })
           } 
          }
        })
    }
    
  });
});