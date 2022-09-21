class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.playerId = Date.now
  }
  takeTurn(event) {
    var playerChoice = null
    console.log(event.target.id)
    //determine computer choice
    var randomInteger = Math.floor(Math.random() * classicOptionsArray.length)
    var computerChoice = classicOptionsArray[randomInteger]
    
    //determine player choice
    if (event.target.id === "classic-rock") {
      playerChoice = "rock"
      classicPaper.classList.add('hidden')
      classicScissors.classList.add('hidden')
    } else if (event.target.id === "classic-paper") {
      playerChoice = "paper"
      classicRock.classList.add('hidden')
      classicScissors.classList.add('hidden')
    } else if (event.target.id === "classic-scissors") {
      playerChoice = "scissors"
      classicRock.classList.add('hidden')
      classicPaper.classList.add('hidden')
    }

      //display computer choice
      if (computerChoice === "rock") {
        classicRock.classList.remove('hidden')
      } else if (computerChoice === "paper") {
        classicPaper.classList.remove('hidden')
      } else if (computerChoice === "scissors") {
        classicScissors.classList.remove('hidden')
      }
    console.log("playerChoice", playerChoice)
    console.log("computerChoice", computerChoice)

    //determine winner 
    if (playerChoice === "rock" && computerChoice === "scissors") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === computerChoice) {
      middleDialogueBox.innerText = "It's a draw!"
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else {
      newGame.computer.wins += 1
      middleDialogueBox.innerText = "Computer wins!"
    }
    // update dom 
    humanScore.innerText = newGame.player.wins
    computerScore.innerText = newGame.computer.wins
    winnerText.innerText = `Player: ${playerChoice} | Computer: ${computerChoice}`
    setTimeout(startClassicGame, 1000)
  }
}


