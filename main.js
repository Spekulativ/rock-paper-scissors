//Establishing base values

let playerScore = 0;
let computerScore = 0;

//Game

function playFullRound() {
  //Creating random computer value

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
    let playerInput = prompt(
      "Choose either Rock, Paper or Scissors"
    ).toLowerCase();
    if (playerInput === "rock") {
      return "Rock";
    } else if (playerInput === "paper") {
      return "Paper";
    } else if (playerInput === "scissors" || playerInput === "scissor") {
      return "Scissors";
    } else return "Invalid input. Type again.", getPlayerChoice();
  }

  let playerResult = getPlayerChoice();

  console.log(
    "Player chooses " + playerResult + ".",
    "Computer chooses " + computerResult + "."
  );

  //Game

  function playRound(playerResult, computerResult) {
    if (playerResult === computerResult) {
      return (
        "Tie! Your score is " +
        playerScore +
        ". The score of the computer is " +
        computerScore +
        "."
      );
    } else if (
      (playerResult === "Rock" && computerResult === "Paper") ||
      (playerResult === "Scissors" && computerResult === "Rock") ||
      (playerResult === "Paper" && computerResult === "Scissors")
    ) {
      return (
        computerScore++,
        "You lose! Your score is " +
          playerScore +
          ". The score of the computer is " +
          computerScore +
          "."
      );
    } else if (
      (playerResult === "Rock" && computerResult === "Scissors") ||
      (playerResult === "Scissors" && computerResult === "Paper") ||
      (playerResult === "Paper" && computerResult === "Rock")
    ) {
      return (
        playerScore++,
        "You win! Your score is " +
          playerScore +
          ". The score of the computer is " +
          computerScore +
          "."
      );
    }
  }
  console.log(playRound(playerResult, computerResult));
}

//Run game until 5

for (let i = 0; i < 50; i++) {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      console.log(
        "Congratulations. You won the game! Your score was " +
          playerScore +
          ". The score of the computer was " +
          computerScore +
          "."
      );
    } else if (computerScore === 5) {
      {
        console.log(
          "You suck. You lost the game! Your score was " +
            playerScore +
            ". The score of the computer was " +
            computerScore +
            "."
        );
      }
    }
  } else if (playerScore || computerScore < 5) {
    playFullRound();
  }
}
