function computerPlay(hand) {
return hand[Math.floor(Math.random()*hand.length)];
}

let hand = ["rock", "paper", "scissors"]






function playRound(playerSelection, computerSelection) {
    // your code here!

    if (playerSelection.toLowerCase() ==  computerSelection) {
        return "It is a tie";
        }
        // Rock Choice
        else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
            return "You lose!"
        } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            return "You win!"
        }
        // Paper Choice
        else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
            return "You lose!"
        } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            return "You win!"
        }
        // Scissors Choice
        else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
            return "You lose"
        } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            return "You win"
        } else {
            return "Oops!"
        }
        
  }

  
  const playerSelection = "RoCK";
  const computerSelection = computerPlay(hand);
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));
 