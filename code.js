
let humanScore = 0;
let computerScore = 0;
let round = 0;

let playerScoreText = document.querySelector("#playerScore");
let computerScoreText = document.querySelector("#computerScore");
let statDiv = document.querySelector("#stats");
let rockButton = document.querySelector(".rockButton");
let paperButton =  document.querySelector(".paperButton");
let scissorsButton = document.querySelector(".scissorsButton");
let roundNumText = document.querySelector("#roundNum");

let roundResultText = document.createElement("div");
roundResultText.textContent = "";


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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    

    if (round >= 5) {
        roundResultText.textContent = `The game is over, please restart the game to continue`;
        return
    }

    statDiv.appendChild(roundResultText);

    round++
    roundNumText.textContent = `Round: ${round}`;

    


    if (humanChoice === computerChoice) {
        console.log(`You and the computer both chose ${humanChoice}, its a tie`);
        roundResultText.textContent = `You and the computer both chose ${humanChoice}, its a tie`;
        


    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log(`you lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            roundResultText.textContent = `you lose, ${computerChoice} beats ${humanChoice}`;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
        }
        else {
            console.log(`you win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            roundResultText.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
            playerScoreText.textContent = `Player Score: ${humanScore}`;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log(`you lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            roundResultText.textContent = `you lose, ${computerChoice} beats ${humanChoice}`;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
        }
        else {
            console.log(`you win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            roundResultText.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
            playerScoreText.textContent = `Player Score: ${humanScore}`;
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log(`you lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            roundResultText.textContent = `you lose, ${computerChoice} beats ${humanChoice}`;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
        }
        else {
            console.log(`you win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            roundResultText.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
            playerScoreText.textContent = `Player Score: ${humanScore}`;
        }
    }


    if (round >= 5) {
        let endScreenButton = document.createElement("div")
        if (humanScore > computerScore) {
            endScreenButton.textContent = "YOU WIN!!!!"
        }
        else if (humanScore < computerScore) {
            endScreenButton.textContent = "YOU LOSE..."
        }
        else {
            endScreenButton.textContent = "Its a tie..."
            

        }

        statDiv.appendChild(endScreenButton);

    }


}



rockButton.addEventListener("click", () => {playRound("rock",getChoice());});
paperButton.addEventListener("click", () => {playRound("paper",getChoice());});
scissorsButton.addEventListener("click", () => {playRound("scissors",getChoice());});


//playGame();