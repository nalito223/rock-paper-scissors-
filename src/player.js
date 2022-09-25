class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.currentChoice
  }
  takeTurn(event) {
    // update gameType in data model 
    newGame.currentGameType = "classic"

    // determine computer choice and update data model 
    var randomInteger = Math.floor(Math.random() * newGame.classicOptionsArray.length)
    var computerChoice = newGame.classicOptionsArray[randomInteger]
    newGame.computer.currentChoice = computerChoice

    // determine player choice and update data model 
    if (event.target.id === "classic-rock") {
      newGame.player.currentChoice = "rock"
    } else if (event.target.id === "classic-paper") {
      newGame.player.currentChoice = "paper"
    } else if (event.target.id === "classic-scissors") {
      newGame.player.curentChoice = "scissors"
    }

    displayPlayerChoiceClassic()

    displayComputerChoiceClassic()

    //determine winner and update data model 
    if (newGame.player.currentChoice === "rock" && newGame.computer.currentChoice === "scissors") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === newGame.computer.currentChoice) {
      newGame.currentGameOutcome = "It's a draw!"
      displayDraw()
    } else if (newGame.player.currentChoice === "paper" && newGame.computer.currentChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "scissors" && newGame.computer.currentChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else {
      newGame.computer.wins += 1
      newGame.currentGameOutcome = "Computer wins!"
    }
    updateDOMResults()
  }

  takeTurnSpicy(event) {
    newGame.currentGameType = "spicy"

    //determine computer choice
    var randomInteger = Math.floor(Math.random() * newGame.spicyOptionsArray.length)
    var computerChoice = newGame.spicyOptionsArray[randomInteger]
    newGame.computer.currentChoice = computerChoice

    //determine player choice
    if (event.target.id === "spicy-rock") {
      newGame.player.currentChoice = "rock"
    } else if (event.target.id === "spicy-paper") {
      newGame.player.currentChoice = "paper"
    } else if (event.target.id === "spicy-scissors") {
      newGame.player.currentChoice = "scissors"
    } else if (event.target.id === "spicy-alien") {
      newGame.player.currentChoice = "alien"
    } else if (event.target.id === "spicy-lizard") {
      newGame.player.currentChoice = "lizard"
    }

    displayPlayerChoiceSpicy()

    displayComputerChoiceSpicy()

    //determine winner 
    if (newGame.player.currentChoice === "rock" && newGame.computer.currentChoice === "scissors") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === newGame.computer.currentChoice) {
      newGame.currentGameOutcome = "It's a draw!"
      displayDraw()
    } else if (newGame.player.currentChoice === "paper" && newGame.computer.currentChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "scissors" && newGame.computer.currentChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "rock" && newGame.computer.currentChoice === "lizard") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "paper" && newGame.computer.currentChoice === "alien") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "scissors" && newGame.computer.currentChoice === "lizard") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "lizard" && newGame.computer.currentChoice === "paper") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "lizard" && newGame.computer.currentChoice === "alien") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "alien" && newGame.computer.currentChoice === "scissors") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === "alien" && newGame.computer.currentChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else {
      newGame.computer.wins += 1
      newGame.currentGameOutcome = "Computer wins!"
    }

    updateDOMResults()
  }
}