console.log("Hello World, type game();");

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

// Work only with the console, will see later for a graphic version... let practice more and more JavaScript first...

function randomComputer() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  return rockPaperScissors[Math.floor(Math.random() * 3)];
} // Function for random choice

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelect = prompt("Type your choice");
    const computerSelect = randomComputer();
    console.log(playRound(playerSelect, computerSelect));
    function playRound(playerSelect, computerSelect) {
      console.log(playerSelect.toLowerCase());
      console.log(computerSelect);
      if (computerSelect === "rock" && playerSelect === "rock") {
        return "its a draw!";
      } else if (computerSelect === "paper" && playerSelect === "paper") {
        return "its a draw!";
      } else if (computerSelect === "scissors" && playerSelect === "scissors") {
        return "its a draw!";
      } else if (computerSelect === "rock" && playerSelect === "paper") {
        return "you win, paper beats rock!";
      } else if (computerSelect === "rock" && playerSelect === "scissors") {
        return "you lose, rock beats scissors!";
      } else if (computerSelect === "paper" && playerSelect === "rock") {
        return "you lose, paper beats rock!";
      } else if (computerSelect === "paper" && playerSelect === "scissors") {
        return "you win, scissors beats paper!";
      } else if (computerSelect === "scissors" && playerSelect === "rock") {
        return "you win, rock beats scissors!";
      } else if (computerSelect === "scissors" && playerSelect === "paper") {
        return "you lose, scissors beats paper!";
      }
    }
  }
};
