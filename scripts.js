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