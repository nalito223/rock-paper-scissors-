// variables
var newGame = new Game()

//elements selectors 
var middleDialogueBox = document.querySelector('.middle-dialogue-box')
var middleHTMLContainer = document.querySelector('.middle-HTML-container')
var humanScore = document.querySelector('.human-score-dynamic')
var computerScore = document.querySelector('.computer-score-dynamic')
var winnerText = document.querySelector('.middle-winner-text')

//buttons selectors 
var spicyButton = document.querySelector('.spicy-button')
var classicButton = document.querySelector('.classic-button')
var changeButton = document.querySelector('.change-button')
var resetButton = document.querySelector('.reset-button')

//options selectors
var classicRock = document.querySelector('.classic-rock-button')
var classicPaper = document.querySelector('.classic-paper-button')
var classicScissors = document.querySelector('.classic-scissors-button')
var spicyLizard = document.querySelector('.spicy-lizard-button')
var spicyAlien = document.querySelector('.spicy-alien-button')
var spicyRock = document.querySelector('.spicy-rock-button')
var spicyPaper = document.querySelector('.spicy-paper-button')
var spicyScissors = document.querySelector('.spicy-scissors-button')

// variables for computer choice function 
var classicOptionsArray = ["rock", "paper", "scissors"]
var spicyOptionsArray = ["rock", "paper", "scissors", "alien", "lizard"]

// event listeners
addEventListener('load', goToStartView)
changeButton.addEventListener('click', goToStartView)
resetButton.addEventListener('click', reloadPage)
// addEventListener('load', instantiateGame)

//functions
function reloadPage() {
  window.location.reload()
}

function goToStartView() {
  winnerText.innerText = ""
  middleDialogueBox.innerText = "Choose your game!"
  changeButton.classList.add('hidden')
  resetButton.classList.add('hidden')
  classicButton.classList.remove('hidden')
  spicyButton.classList.remove('hidden')
  classicRock.classList.add('hidden')
  classicPaper.classList.add('hidden')
  classicScissors.classList.add('hidden')
  // hide spicy options
  spicyPaper.classList.add('hidden')
  spicyScissors.classList.add('hidden')
  spicyLizard.classList.add('hidden')
  spicyAlien.classList.add('hidden')
  spicyRock.classList.add('hidden')
  classicButton.addEventListener('click', startClassicGame)
  spicyButton.addEventListener('click', startSpicyGame)
}

function startClassicGame() {
  winnerText.innerText = ""
  middleDialogueBox.innerText = "Choose your fighter!"
  changeButton.classList.remove('hidden')
  resetButton.classList.remove('hidden')
  classicButton.classList.add('hidden')
  spicyButton.classList.add('hidden')
  classicRock.classList.remove('hidden')
  classicPaper.classList.remove('hidden')
  classicScissors.classList.remove('hidden')
  classicRock.addEventListener('click', newGame.player.takeTurn)
  classicPaper.addEventListener('click', newGame.player.takeTurn)
  classicScissors.addEventListener('click', newGame.player.takeTurn)
}

function startSpicyGame() {
  winnerText.innerText = ""
  middleDialogueBox.innerText = "Choose your fighter!"
  changeButton.classList.remove('hidden')
  resetButton.classList.remove('hidden')
  classicButton.classList.add('hidden')
  spicyButton.classList.add('hidden')
  spicyRock.classList.remove('hidden')
  spicyPaper.classList.remove('hidden')
  spicyScissors.classList.remove('hidden')
  spicyAlien.classList.remove('hidden')
  spicyLizard.classList.remove('hidden')
  spicyRock.addEventListener('click', newGame.player.takeTurnSpicy)
  spicyPaper.addEventListener('click', newGame.player.takeTurnSpicy)
  spicyScissors.addEventListener('click', newGame.player.takeTurnSpicy)
  spicyLizard.addEventListener('click', newGame.player.takeTurnSpicy)
  spicyAlien.addEventListener('click', newGame.player.takeTurnSpicy)
}