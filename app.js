const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;



let drawRound = "It's a draw!"
let playerRound = "You win!"
let computerRound = "Computer wins!"


function computerPlay() {
    return computerChoice = choices[Math.floor(Math.random()*choices.length)];
}




//plays a single round
function playRound(playerSelection, computerSelection) {
// Drawn result
if (playerSelection.toLowerCase() == computerSelection) {
    return drawRound
}
//Rock choice
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    playerScore++
    return playerRound
} else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    computerScore++
    return computerRound
} 
//Paper choice
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    playerScore++
    return playerRound
} else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    computerScore++
    return computerRound
}
//Scissors choice
 else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    playerScore++
    return playerRound
} else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    computerScore++
    return computerRound
} else return "Oops"
}


function game() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Rock scissors paper 1, 2, 3!").toLowerCase();
    console.log ("You chose " + playerSelection);
    console.log ("Computer chose " + computerSelection)
    console.log (playRound(playerSelection, computerSelection))
    console.log ("Your score is " + playerScore)
    console.log ("Computer score is " + computerScore)
   
}


    
for (let i = 0; i < 5; i++) {
    console.log("Round #" + (i+1))
    game();    
 }
        
if (playerScore > computerScore) {
    console.log ("Game over. You win")
} else if (playerScore < computerScore) {
    console.log("Game over. You lose")
} else {
    console.log("Game over. It's a draw")
}

        
    
        
