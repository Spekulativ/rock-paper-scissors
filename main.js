//Establishing base values

let playerScore = 0;
let computerScore = 0;

//Game

function playFullRound(){
//Creating random computer value

setTimeout(getPlayerChoice,5000); //Delaying choice to show score in console before rechoosing

function getComputerChoice() {
    
let computerRandom = [0, 1, 2];

let getComputerRandom = Math.floor(Math.random() * computerRandom.length);
  if (getComputerRandom === 0) {
    return "Rock";
  } else if (getComputerRandom === 1) {
    return "Paper";
  } else if (getComputerRandom === 2) {
    return "Scissors";
  }
}

let computerResult = getComputerChoice();

//Player selection


function getPlayerChoice() {
    let playerInput = prompt("Choose either Rock, Paper or Scissors").toLowerCase();
  if (playerInput === "rock") {
    return "Rock";
  } else if (playerInput === "paper") {
    return "Paper";
  } else if ((playerInput === "scissors", playerInput === "scissor")) {
    return "Scissors";
  } else
    return (
      "Invalid input. Type again.",
      getPlayerChoice()
    );
}

let playerResult = getPlayerChoice();

console.log(
  "Player chooses " + playerResult + ".",
  "Computer chooses " + computerResult + "."
);

//Game

function playRound(playerResult, computerResult) {
  if (playerResult === computerResult) {
    return "Tie! Your score is " + playerScore + ". The score of the computer is " + computerScore + ".";
  } else if (playerResult === "Rock" && computerResult === "Paper") {
    return computerScore++, "You lose! Your score is " + playerScore + ". The score of the computer is " + computerScore + ".";
  } else if (playerResult === "Rock" && computerResult === "Scissors") {
    return playerScore++, "You win! Your score is " + playerScore + ". The score of the computer is " + computerScore + ".";
  }
}

console.log(playRound(playerResult, computerResult));


}

for (let i = 0; i < 10; i++ ) {
    if (playerScore || computerScore < 5) {
        playFullRound();
    }
    else {
    return "The final score is: " + computerScore + 
    }
}

