let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//Computer selection
function computerPlay(hand) {
return hand[Math.floor(Math.random()*hand.length)];
}

let hand = ["rock", "paper", "scissors"]



//Play one round of janken
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection ==  computerSelection) {
        return draw;
        }
        // Rock Choice
        else if (playerSelection == "rock" && computerSelection == "paper") {
            return computerRound;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            return playerRound
        }
        // Paper Choice
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            return computerRound
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return playerRound;
        }
        // Scissors Choice
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            return computerRound
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return playerRound;
        } else {
            return "Oops!"
        }
        
  }
//Specifies win messages
  let playerRound = "Well done!"
  let computerRound = "You are a loser! You lost!"
  let draw = "It's a draw, throw again!"
  let playerWin = "A winner is you!"
  let computerWin = "The machines have taken over"

  


  

for (let i = 0; i < 1000; i++) {
    let playerSelection = prompt("Rock scissors paper 1, 2, 3!").toLowerCase();
  console.log("You chose " + playerSelection)
  const computerSelection = computerPlay(hand);
  console.log("Computer chose " + computerSelection)
  let roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
  game(roundResult);
  console.log("Your score is " + playerScore);
  console.log("The computer's score is " + computerScore)

  if (playerScore === 5 || computerScore === 5) {
      break;
  }
}



function game(result) {
    

    if (result === computerRound) {
        computerScore++;
        return computerScore;
    } else if (result === draw) {
        drawScore++;
        return drawScore;
    } else playerScore++;

    if (playerScore === 5) {
        console.log(playerWin);
        return;
    }
    if (computerScore === 5) {
        console.log(computerWin);
        return;
    }

}



