let computerOptions = ['Rock', 'Paper', 'Scissors']

function playRound() {
  // The following function allows the computer to randomly select
  function computerPlay() {
    let randNum = Math.floor(Math.random()*computerOptions.length);
    let compChoice = computerOptions[randNum];
    return compChoice;
  }
  // The following function allows the user to select a choice
  function userPlay() {
    let userInput = prompt("Please type Rock, Paper or Scissors!")
    let userChoiceLower = userInput.toLowerCase();
    let userChoice = userChoiceLower.charAt(0).toUpperCase() + userChoiceLower.slice(1);
    return userChoice;
  }
  // Creating useable variables from the two above functions
  let userChoice = userPlay();
  let compChoice = computerPlay();
  if (userChoice === "Rock" && compChoice === "Scissors"){
    return "You defeated the Computer! Your Rock crushed the Computer's scissors!"
  } else if (userChoice === "Rock" && compChoice === "Rock") {
    return "You tied with the Computer! You both chose rock..."
  } else if (userChoice === "Rock" && compChoice === "Paper") {
    return "You were beaten by the Computer... Their paper wrapped up your rock."
  } else if (userChoice === "Paper" && compChoice === "Paper") {
    return "You tied with the Computer! You both chose paper..."
  } else if (userChoice === "Paper" && compChoice === "Rock") {
    return "You defeated the Computer! Your paper covered their rock!"
  } else if (userChoice === "Paper" && compChoice === "Scissors") {
    return "You were beaten by the Computer! Their scissors cut your paper into pieces"
  } else if (userChoice === "Scissors" && compChoice === "Paper") {
    return "You defeated the Computer! Your scissors cut their paper in half!"
  } else if (userChoice === "Scissors" && compChoice === "Rock") {
    return "You were beaten by the Computer! Their rock crushed your scissors!"
  } else if (userChoice === "Scissors" && compChoice === "Scissors") {
    return "You tied with the Computer! You both chose scissors..."
  } else {
    return "There was an invalid selection somewhere!"
  }
}
// Supposed to call the playRound function 5 times, is only working once though
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

