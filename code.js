
let humanScore = 0;
let computerScore = 0;

function getChoice() {
    let num = Math.random();
    if (num > 0.7) {
        return "rock";
    }
    else if (num > 0.3 && num <= 0.7)  {
        return "paper";
    }
    else return "scissors";
    }

function playerChoice() {
    let choice = prompt("Input rock, paper or scissors");
    console.log(choice);
    return choice;
}    

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`You and the computer both chose ${humanChoice}, its a tie`);
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log(`you lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`you win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log(`you lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`you win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log(`you lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`you win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    else {
        console.log(`${humanChoice} is not a valid input, the computer wins`);
    }


}

function playGame() {


    for (let i = 0; i < 5; i++) {
        console.log("round " + (i + 1));
        let humanSelect = playerChoice();
        let computerSelect = getChoice();
        playRound(humanSelect,computerSelect);
    }
    if (humanScore === computerScore) {
        console.log(`Your final score is: ${humanScore}, the computers final score is ${computerScore}, its a tie!`);
    } 
    else if (computerScore > humanScore) {
        console.log(`Your final score is: ${humanScore}, the computers final score is ${computerScore}, you lose...`);
    }

    else {
        console.log(`Your final score is: ${humanScore}, the computers final score is ${computerScore}, you win!`)
    }
}


playGame();