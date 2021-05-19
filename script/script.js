console.log("Hello World");

/* 
Rock beats scissors
Scissors beats paper
Paper beats rock
Computer play
player play
compare computer choice and player choice
if computer choice is "choice" and player choice is "choice",
then return message :
*/

function randomComputer() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  return rockPaperScissors[
    Math.floor(Math.random() * rockPaperScissors.length)
  ];
} // Function for random choice

// function computerPlay() {
//   let computerSelect = randomComputer;
// }

// function playerSelect(x) {
//   x = prompt("What is your choice?");
//   return x.toLowerCase();
// }

function playRound(computerSelect, playerSelect) {
  function computerSelect(comp) {
    comp = randomComputer();
  }
  function playerSelect(x) {
    x = prompt("What is your choice?");
    return x.toLowerCase();
  }
  if (computerSelect === "rock" && playerSelect === "rock") {
    return "its a draw!";
  }
  if (computerSelect === "paper" && playerSelect === "paper") {
    return "its a draw!";
  }
  if (computerSelect === "scissors" && playerSelect === "scissors") {
    return "its a draw!";
  }
  if (computerSelect === "rock" && playerSelect === "paper") {
    return "you win, paper beats rock!";
  }
  if (computerSelect === "rock" && playerSelect === "scissors") {
    return "you lose, rock beats scissors!";
  }
  if (computerSelect === "paper" && playerSelect === "rock") {
    return "you lose, paper beats rock!";
  }
  if (computerSelect === "paper" && playerSelect === "scissors") {
    return "you win, scissors beats paper!";
  }
  if (computerSelect === "scissors" && playerSelect === "rock") {
    return "you win, rock beats scissors!";
  }
  if (computerSelect === "scissors" && playerSelect === "paper") {
    return "you lose, scissors beats paper!";
  }
}
