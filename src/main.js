// create classes per spec
// create data model in main.js 
// create function for starting page which incldues the two game options with rules
//for starting page, the inner html should change to two clickable divs for the two modes
//once a mode is clicked, that should instantiate a game class which in turn creates two player classes all of which should be pushed into the data model 

// data model
var DataModel = []

// variables
var middleDialogueBox = document.querySelector('.middle-dialogue-box')
var middleHTMLContainer = document.querySelector('.middle-HTML-container')

// event listeners
addEventListener('load', goToStartView)

// functions
function goToStartView() {
  middleDialogueBox.innerText = "Choose your game!"
  middleHTMLContainer.innerHTML = ""
  middleHTMLContainer.innerHTML += `

    <button class="classic-button">
      <h5>Classic mode</h5> 
      <h6>rock > scissors<h6>
      <h6>paper > rock<h6>
      <h6>scissors > paper<h6>
    </button>

    <button class="spicy-button">
      <h5>Spicy mode</h5> 
      <h6>rock > scissors & lizard<h6>
      <h6>paper > rock & alien<h6>
      <h6>scissors > paper & lizard<h6>
      <h6>lizard > paper & alien<h6>
      <h6>alien > scissors & rock<h6>
    </button>
  `
  var classicButton = document.querySelector('.classic-button')
  classicButton.addEventListener('click', startClassicGame)
}

function startClassicGame() {
  middleDialogueBox.innerText = "Choose your fighter!"
  middleHTMLContainer.innerHTML = ""
  middleHTMLContainer.innerHTML += `
  <div class="classic-rock-button"> 
    <img class="options" id="classic-rock" src="./assets/rock.png">
  </div>
  <div class="classic-paper-button">
    <img class="options" id="classic-paper" src="./assets/post-it.png">
  </div>
  <div class="classic-scissors-button">
    <img class="options" id="classic-scissors" src="./assets/scissors.png">
  </div>
  `
  var classicRock = document.querySelector('.classic-rock-button')
  var classicPaper = document.querySelector('.classic-paper-button')
  var classicScissors = document.querySelector('.classic-scissors-button')
  classicRock.addEventListener('click', selectRock)
  classicPaper.addEventListener('click', takeTurn)
  classicScissors.addEventListener('click', takeTurn)
  
}

function selectRock() {
  // run conditional using takeTurn
  // take turn should create a new game 
  Player.takeTurn("rock")
}

var player1 = new Player("John", ":)")
// function test() {
//   alert('test!')
// }

