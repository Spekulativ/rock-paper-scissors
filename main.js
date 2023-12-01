//Create random computer value

let computerRandom = [0, 1, 2];

let getComputerRandom = Math.floor(Math.random() * computerRandom.length);

function getComputerChoice() {
    if (getComputerRandom === 0) {
    return "Rock";
    }
    else if (getComputerRandom === 1) {
    return "Paper";
    }
    else if (getComputerRandom === 2) {
    return "Scissors";
    }

}

let computerResult = getComputerChoice();

console.log(computerResult);

// Lav først et element med computervalg
// Computer skal skabe et tilfældigt tal mellem 3
// Dette tal skal repræsentere en værdi fx rock

// Sten saks papir
