console.log("Hello World!");

// Create a function called getComputerChoice
// Generate a random number between 0 and 1
// If the number is < 1/3, return "rock"
// If the number is between 1/3 and 2/3, return "paper"
// If the number is >= 2/3, return "scissors"
// Log the function call to check the output

function getComputerChoice() {
    let randomNum = Math.random ();
        if (randomNum <= 1/3 ) {
            return "rock";
        }
        else if (randomNum <=2/3) {
            return "paper";
        }
        else {
            return "scissors";
        }
    
    }
 console.log(getComputerChoice());

 // Create a new function named getHumanChoice
 // Use prompt inside the function to get the user's input (rock, paper, scissors)
 // convert the input to lowercase to make it case insesitive
 // return the input given
 
 function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors");
    return choice.toLowerCase();
 }
 console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

