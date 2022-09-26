class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.currentChoice
  }
  takeTurnClassic(event) {
    // update gameType in data model 
    newGame.currentGameType = "classic"

    // determine player choice and update data model 
    if (event.target.id === "classic-rock") {
      newGame.player.currentChoice = "rock"
    } else if (event.target.id === "classic-paper") {
      newGame.player.currentChoice = "paper"
    } else if (event.target.id === "classic-scissors") {
      newGame.player.currentChoice = "scissors"
    }

    // determine computer choice and update data model 
    newGame.player.determineComputerChoice()

    //determine winner and update data model 
    if (newGame.player.currentChoice === "rock" && newGame.computer.currentChoice === "scissors") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === newGame.computer.currentChoice) {
      newGame.currentGameOutcome = "It's a draw!"
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

    // update DOM
    displayDraw()
    displayPlayerChoiceClassic()
    displayComputerChoiceClassic()
    updateDOMResults()
  }

  takeTurnSpicy(event) {
    // update gameType in data model 
    newGame.currentGameType = "spicy"

    // determine computer choice and update data model 
    newGame.player.determineComputerChoice()

    // determine player choice and update data model  
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

    //determine winner and update data model 
    if (newGame.player.currentChoice === "rock" && newGame.computer.currentChoice === "scissors") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (newGame.player.currentChoice === newGame.computer.currentChoice) {
      newGame.currentGameOutcome = "It's a draw!"
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

    // update DOM 
    displayDraw()
    displayPlayerChoiceSpicy()
    displayComputerChoiceSpicy()
    updateDOMResults()
  }

  determineComputerChoice() {
    if (newGame.currentGameType === "classic") {
      var randomInteger = Math.floor(Math.random() * newGame.classicOptionsArray.length)
      var computerChoice = newGame.classicOptionsArray[randomInteger]
      newGame.computer.currentChoice = computerChoice
    } else if (newGame.currentGameType === "spicy") {
      var randomInteger = Math.floor(Math.random() * newGame.spicyOptionsArray.length)
      var computerChoice = newGame.spicyOptionsArray[randomInteger]
      newGame.computer.currentChoice = computerChoice
    }
  }
}