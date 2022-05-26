// I was practicing with codecademy, and I had to do a rock paper scissors, so :

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput ===    'scissors') {
      return userInput;
    } else {
      console.log("This is not part of the game");
    }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "it's a tie!";
    } else {
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return "Paper covers rock, you lose";
        } else {
          return "Rock destroys scissors, you win"
        }
      } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return "Paper covers rock, you win";
        } else {
          return "Scissors cut paper, you lose"
        }
      } else {
        if (computerChoice === 'Rock') {
          return "Rock destroys scissors, you lose"
        } else {
          return "Scissors cut paper, you win"
        }
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();