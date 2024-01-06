// Initial scores, set computer choice, set player choice

let playerScore = 0;
let computerScore = 0;
let computerChoice = '';
let playerChoice = '';

// Randomly chooses an options for the computer
function getComputerChoice () {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const getRandomIndex = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[getRandomIndex].toLowerCase();
}

function singleRound (computerChoice, playerChoice) {
    // Loads the computer choice for use in future prompts
    computerChoice = getComputerChoice();
    // identify the available options to choose from
    playerOptions = ['rock', 'paper', 'scissors'];
    // collect input from player
    let choice = prompt('Hi there. What is your choice? (rock, paper, or scissors').toLowerCase();
    playerChoice = choice;
    // check to see if the user entered rock paper or scissors
    if (playerOptions.includes(choice)) {
        console.log(`Ok. You have chosen ${choice}, and the computer chose ${computerChoice}.`);
    } else {
        console.log("That is not a valid choice. Choose rock, paper or scissors.");
    }
    if (computerChoice === playerChoice) {
        return "You both chose the same. It's a tie!";
        singleRound();
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        playerScore++;
        return "Paper covers rock. You win!";
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        playerScore++;
        return "Paper covers rock. You win!";
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        playerScore++;
        return "Rock smashes scissors. You win!";
    } else {
        computerScore++;
        return "The computer won this round!";
    }
}

function game () {
    // Play 5 rounds and keep track of the scores
    for (let i=0; i<5; i++) {
        computerChoice = getComputerChoice();
        let roundResult = singleRound(computerChoice, playerChoice);
        console.log(roundResult);
        
        console.log(`Round ${i+1}! Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
    // Check to see who won best of 5 rounds
    if (playerScore < computerScore) {
        return `You lose! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    } else if (playerScore > computerScore) {
        return `You win! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
}

console.log(game());
