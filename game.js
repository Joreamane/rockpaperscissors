let computerOptions = ['Rock', 'Paper', 'Scissors']
const userWins = document.getElementById('userWins')
const compWins = document.getElementById('compWins')
let iUser = 0
let iComp = 0

function playRound() {
  function computerPlay() {
    let randNum = Math.floor(Math.random()*computerOptions.length);
    let compChoice = computerOptions[randNum];
    return compChoice;
  }
  let userChoice = event.target.textContent
  let compChoice = computerPlay();
  let result = ''
  // while(iUser < '5' || iComp < '5') {
    if (userChoice === "Rock" && compChoice === "Scissors"){
      result = "You defeated the Computer! Your Rock crushed the Computer's scissors!"
      iUser++
    } else if (userChoice === "Rock" && compChoice === "Rock") {
      result = "You tied with the Computer! You both chose rock..."
    } else if (userChoice === "Rock" && compChoice === "Paper") {
      result = "You were beaten by the Computer... Their paper wrapped up your rock."
      iComp++
    } else if (userChoice === "Paper" && compChoice === "Paper") {
      result = "You tied with the Computer! You both chose paper..."
    } else if (userChoice === "Paper" && compChoice === "Rock") {
      result = "You defeated the Computer! Your paper covered their rock!"
      iUser++
    } else if (userChoice === "Paper" && compChoice === "Scissors") {
      result = "You were beaten by the Computer! Their scissors cut your paper into pieces"
      iComp++
    } else if (userChoice === "Scissors" && compChoice === "Paper") {
      result = "You defeated the Computer! Your scissors cut their paper in half!"
      iUser++
    } else if (userChoice === "Scissors" && compChoice === "Rock") {
      result = "You were beaten by the Computer! Their rock crushed your scissors!"
      iComp++
    } else if (userChoice === "Scissors" && compChoice === "Scissors") {
      result = "You tied with the Computer! You both chose scissors..."
    } else {
      result = "There was an invalid selection somewhere!"
  // }
    }
  let outcome = document.getElementById('outcome')
  outcome.textContent = result
  userWins.textContent = iUser
  compWins.textContent = iComp
  const finalResult = document.querySelector('.finalResult')
  if(iUser === 5) {
    finalResult.textContent = 'Congratulations on defeating the Computer! Refresh the page to play again!'
  }
  if(iComp === 5) {
    finalResult.textContent = 'Sadly you have been utterly defeated... Refresh the page to try again!'
  }
}

document.querySelectorAll('.userPlay').forEach(e => e.addEventListener('click', function() {
  while(iUser < '5' && iComp < '5') {
    playRound();
    break;
  }
}))
