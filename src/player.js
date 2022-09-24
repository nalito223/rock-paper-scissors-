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
    var playerChoice = null

    //determine computer choice
    var randomInteger = Math.floor(Math.random() * newGame.spicyOptionsArray.length)
    var computerChoice = newGame.spicyOptionsArray[randomInteger]
    newGame.computer.currentChoice = computerChoice

    //determine player choice
    if (event.target.id === "spicy-rock") {
      playerChoice = "rock"
      spicyPaper.classList.add('hidden')
      spicyScissors.classList.add('hidden')
      spicyLizard.classList.add('hidden')
      spicyAlien.classList.add('hidden')
    } else if (event.target.id === "spicy-paper") {
      playerChoice = "paper"
      spicyRock.classList.add('hidden')
      spicyScissors.classList.add('hidden')
      spicyLizard.classList.add('hidden')
      spicyAlien.classList.add('hidden')
    } else if (event.target.id === "spicy-scissors") {
      playerChoice = "scissors"
      spicyRock.classList.add('hidden')
      spicyPaper.classList.add('hidden')
      spicyLizard.classList.add('hidden')
      spicyAlien.classList.add('hidden')
    } else if (event.target.id === "spicy-alien") {
      playerChoice = "alien"
      spicyRock.classList.add('hidden')
      spicyPaper.classList.add('hidden')
      spicyLizard.classList.add('hidden')
      spicyScissors.classList.add('hidden')
    } else if (event.target.id === "spicy-lizard") {
      playerChoice = "lizard"
      spicyRock.classList.add('hidden')
      spicyPaper.classList.add('hidden')
      spicyAlien.classList.add('hidden')
      spicyScissors.classList.add('hidden')
    }
    newGame.player.currentChoice = playerChoice

    //display computer choice
    if (computerChoice === "rock") {
      spicyRock.classList.remove('hidden')
    } else if (computerChoice === "paper") {
      spicyPaper.classList.remove('hidden')
    } else if (computerChoice === "scissors") {
      spicyScissors.classList.remove('hidden')
    } else if (computerChoice === "lizard") {
      spicyLizard.classList.remove('hidden')
    } else if (computerChoice === "alien") {
      spicyAlien.classList.remove("hidden")
    }

    //determine winner 
    if (playerChoice === "rock" && computerChoice === "scissors") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === computerChoice) {
      newGame.currentGameOutcome = "It's a draw!"
      draw.classList.remove('hidden')
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"

      // new spicy conditions below
    } else if (playerChoice === "rock" && computerChoice === "lizard") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === "paper" && computerChoice === "alien") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === "scissors" && computerChoice === "lizard") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === "lizard" && computerChoice === "paper") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === "lizard" && computerChoice === "alien") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === "alien" && computerChoice === "scissors") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else if (playerChoice === "alien" && computerChoice === "rock") {
      newGame.player.wins += 1
      newGame.currentGameOutcome = "Player wins!"
    } else {
      newGame.computer.wins += 1
      newGame.currentGameOutcome = "Computer wins!"
    }

    updateDOMResults()
  }
}