// class instantiation 
var newGame = new Game()

// element selectors 
var middleDialogueBox = document.querySelector('.middle-dialogue-box')
var middleHTMLContainer = document.querySelector('.middle-HTML-container')
var humanScore = document.querySelector('.human-score-dynamic')
var computerScore = document.querySelector('.computer-score-dynamic')
var winnerText = document.querySelector('.middle-winner-text')

// button selectors 
var spicyButton = document.querySelector('.spicy-button')
var classicButton = document.querySelector('.classic-button')
var changeButton = document.querySelector('.change-button')
var resetButton = document.querySelector('.reset-button')

// option selectors for classic version
var classicRock = document.querySelector('.classic-rock-button')
var classicPaper = document.querySelector('.classic-paper-button')
var classicScissors = document.querySelector('.classic-scissors-button')
var draw = document.querySelector('.draw')

// option selectors for spicy version
var spicyLizard = document.querySelector('.spicy-lizard-button')
var spicyAlien = document.querySelector('.spicy-alien-button')
var spicyRock = document.querySelector('.spicy-rock-button')
var spicyPaper = document.querySelector('.spicy-paper-button')
var spicyScissors = document.querySelector('.spicy-scissors-button')

// global event listeners
addEventListener('load', goToStartView)
changeButton.addEventListener('click', goToStartView)
resetButton.addEventListener('click', reloadPage)

// functions
function reloadPage() {
  window.location.reload()
}

function goToStartView() {
  winnerText.innerText = ""
  middleDialogueBox.innerText = "Choose your game!"
  draw.classList.add('hidden')
  changeButton.classList.add('hidden')
  resetButton.classList.add('hidden')
  classicButton.classList.remove('hidden')
  spicyButton.classList.remove('hidden')
  classicRock.classList.add('hidden')
  classicPaper.classList.add('hidden')
  classicScissors.classList.add('hidden')
  spicyPaper.classList.add('hidden')
  spicyScissors.classList.add('hidden')
  spicyLizard.classList.add('hidden')
  spicyAlien.classList.add('hidden')
  spicyRock.classList.add('hidden')
  classicButton.addEventListener('click', startClassicGame)
  spicyButton.addEventListener('click', startSpicyGame)
}

function startClassicGame() {
  resetButton.classList.remove('fade')
  changeButton.classList.remove('fade')
  middleHTMLContainer.classList.remove('disable')
  resetButton.disabled = false
  changeButton.disabled = false
  winnerText.innerText = ""
  middleDialogueBox.innerText = "Choose your fighter!"
  draw.classList.add('hidden')
  spicyButton.classList.add('hidden')
  classicButton.classList.add('hidden')
  changeButton.classList.remove('hidden')
  resetButton.classList.remove('hidden')
  classicRock.classList.remove('hidden')
  classicPaper.classList.remove('hidden')
  classicScissors.classList.remove('hidden')
  classicRock.addEventListener('click', newGame.player.takeTurn)
  classicPaper.addEventListener('click', newGame.player.takeTurn)
  classicScissors.addEventListener('click', newGame.player.takeTurn)
}

function startSpicyGame() {
  resetButton.classList.remove('fade')
  changeButton.classList.remove('fade')
  middleHTMLContainer.classList.remove('disable')
  resetButton.disabled = false
  changeButton.disabled = false
  winnerText.innerText = ""
  middleDialogueBox.innerText = "Choose your fighter!"
  draw.classList.add('hidden')
  classicButton.classList.add('hidden')
  spicyButton.classList.add('hidden')
  changeButton.classList.remove('hidden')
  resetButton.classList.remove('hidden')
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

function disableButtons() {
  if (newGame.currentGameType === "classic") {
    middleHTMLContainer.classList.add('disable')
    resetButton.disabled = true
    changeButton.disabled = true
    resetButton.classList.add('fade')
    changeButton.classList.add('fade')
    setTimeout(startClassicGame, 2200)
  } else if (newGame.currentGameType === "spicy") {
    middleHTMLContainer.classList.add('disable')
    resetButton.disabled = true
    changeButton.disabled = true
    resetButton.classList.add('fade')
    changeButton.classList.add('fade')
    setTimeout(startSpicyGame, 2200)
  }
}

function updateDOMResults() {
  middleDialogueBox.innerText = newGame.currentGameOutcome
  humanScore.innerText = newGame.player.wins
  computerScore.innerText = newGame.computer.wins
  winnerText.innerText = `Player: ${newGame.player.currentChoice} | Computer: ${newGame.computer.currentChoice}`
  disableButtons()
}

function displayPlayerChoiceClassic() {
  if (newGame.player.currentChoice = "rock") {
    classicPaper.classList.add('hidden')
    classicScissors.classList.add('hidden')
  } else if (newGame.player.currentChoice = "paper") {
    classicRock.classList.add('hidden')
    classicScissors.classList.add('hidden')
  } else if (newGame.player.curentChoice = "scissors") {
    classicRock.classList.add('hidden')
    classicPaper.classList.add('hidden')
  }
}

function displayComputerChoiceClassic() {
  if (newGame.computer.currentChoice === "rock") {
    classicRock.classList.remove('hidden')
  } else if (newGame.computer.currentChoice === "paper") {
    classicPaper.classList.remove('hidden')
  } else if (newGame.computer.currentChoice === "scissors") {
    classicScissors.classList.remove('hidden')
  }
}

function displayDraw() {
  draw.classList.remove('hidden')
}