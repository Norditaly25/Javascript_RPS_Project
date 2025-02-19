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


 // Create a new function named getHumanChoice
 // Use prompt inside the function to get the user's input (rock, paper, scissors)
 // convert the input to lowercase to make it case insesitive
 // return the input given
 
 // Function to get user's input and ensure it's valid
function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Enter rock, paper, or scissors").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        console.log("Invalid input! Please enter rock, paper, or scissors.");
    }
}

// Function to play one round and return the winner
function playRound(humanChoice, computerChoice) {
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors.");
                return "human";
            } else {
                console.log("You lose! Paper beats Rock.");
                return "computer";
            }

        case "paper":
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                return "human";
            } else {
                console.log("You lose! Scissors beats Paper.");
                return "computer";
            }

        case "scissors":
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                return "human";
            } else {
                console.log("You lose! Rock beats Scissors.");
                return "computer";
            }
    }
}
// Function to play 5 rounds and track scores
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let winner = playRound(humanChoice, computerChoice);

        // Update scores
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        console.log(`Current Score: Human ${humanScore} - Computer ${computerScore}`);
        console.log("-------------------------");
    }

    // Final Result
    console.log("Final Score:");
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game! Better luck next time.");
    } else {
        console.log("It's a tie! Well played.");
    }
}

// Start the game
playGame();