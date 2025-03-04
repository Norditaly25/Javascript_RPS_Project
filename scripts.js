// Create a function called getComputerChoice
// Generate a random number between 0 and 1
// If the number is < 1/3, return "rock"
// If the number is between 1/3 and 2/3, return "paper"
// If the number is >= 2/3, return "scissors"
// Log the function call to check the output

function getComputerChoice() {
    let randomNum = Math.random();
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
        resultContainer.textContent = "It's a tie!";
        scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        return "tie";
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore += 1;
                scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;              
                resultContainer.textContent = "You win! Rock beats Scissors.";
            } else {
                computerScore += 1;
                scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
                resultContainer.textContent = "You lose! Paper beats Rock.";
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                humanScore += 1;
                scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
                resultContainer.textContent = "You win! Paper beats Rock.";
            } else {
                computerScore += 1;
                scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
                resultContainer.textContent = "You lose! Scissors beats Paper.";
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                humanScore += 1;
                scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
                resultContainer.textContent = "You win! Scissors beats Paper.";
            } else {
                computerScore += 1;
                scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
                resultContainer.textContent = "You lose! Rock beats Scissors.";
            }
            break;
        }
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                resultContainer.textContent = "Congratulations! You won the game!";
            } else {
                resultContainer.textContent = "The computer won the game! Better luck next time.";
            }
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
}

let humanScore = 0;
let computerScore = 0;
const buttonContainer = document.createElement("div");
const resultContainer = document.createElement("div");
const scoreContainer = document.createElement("div");
    scoreContainer.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
document.body.appendChild(buttonContainer);
document.body.appendChild(resultContainer);
document.body.appendChild(scoreContainer);

rockButton.addEventListener(`click`, () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener(`click`, () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener(`click`, () => {
    playRound("scissors", getComputerChoice());
});