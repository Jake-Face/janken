const choices = ["rock", "paper", "scissors"];

let playerScore = parseInt(document.getElementById("user-score").innerHTML);
let computerScore = parseInt(document.getElementById("cpu-score").innerHTML);



let drawRound = "This round is a draw"
let playerRoundRock = "Rock smashes scissors. You win this round!"
let playerRoundPaper = "Paper wraps rock. You win this round!"
let playerRoundScissors = "Scissors cuts paper. You win this round!"
let computerRoundRock = "Rock smashes scissors. Computer wins this round!"
let computerRoundPaper = "Paper wraps rock. Computer wins this round!"
let computerRoundScissors = "Scissors cuts paper. Computer wins this round!"

let computerWin = "Game over. You lose"
let playerWin = "Game over. You win"
let drawGame = "Game over. It's a draw"



function computerPlay() {
    return computerChoice = choices[Math.floor(Math.random()*choices.length)];
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    let playerSelection = button.id
    let computerSelection = computerPlay()
    
    playRound(playerSelection, computerSelection)
    
    
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        return resultDecide()
           } 

    
    })
})


        


//plays a single round
function playRound(playerSelection, computerSelection) {
// Drawn result
if (playerSelection == computerSelection) {
    document.getElementById("results").innerHTML = drawRound
}
//Rock choice
else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++
    document.getElementById("results").innerHTML = playerRoundRock
    document.getElementById("user-score").innerHTML = playerScore
} else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++
    document.getElementById("results").innerHTML = computerRoundPaper
    document.getElementById("cpu-score").innerHTML = computerScore
} 
//Paper choice
else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++
    document.getElementById("results").innerHTML = playerRoundPaper
    document.getElementById("user-score").innerHTML = playerScore
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++
    document.getElementById("results").innerHTML = computerRoundScissors
    document.getElementById("cpu-score").innerHTML = computerScore
}
//Scissors choice
 else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++
    document.getElementById("results").innerHTML = playerRoundScissors
    document.getElementById("user-score").innerHTML = playerScore
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++
    document.getElementById("results").innerHTML = computerRoundRock
    document.getElementById("cpu-score").innerHTML = computerScore
} else return "Oops"
}



//announces the results
function resultDecide() {
if (playerScore === 5) {
    document.getElementById("results").innerHTML = playerWin
} else if (computerScore === 5) {
    document.getElementById("results").innerHTML = computerWin

   
}
}



function reset() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("user-score").innerHTML = "0";
    document.getElementById("cpu-score").innerHTML = "0";
    playerScore = 0;
    computerScore = 0;

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', ()=> reset());
        
    
        
