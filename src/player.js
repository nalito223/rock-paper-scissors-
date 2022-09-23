class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
  }
  takeTurn(event) {
    var playerChoice = null

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

    //determine winner and update data model 
    if (playerChoice === "rock" && computerChoice === "scissors") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === computerChoice) {
      middleDialogueBox.innerText = "It's a draw!"
      draw.classList.remove('hidden')
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
    // setTimeout(startClassicGame, 2200)

    disableButtons("classic")
  }

  takeTurnSpicy(event) {
    var playerChoice = null

    //determine computer choice
    var randomInteger = Math.floor(Math.random() * spicyOptionsArray.length)
    var computerChoice = spicyOptionsArray[randomInteger]

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
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === computerChoice) {
      middleDialogueBox.innerText = "It's a draw!"
      draw.classList.remove('hidden')
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"

      // new spicy conditions below
    } else if (playerChoice === "rock" && computerChoice === "lizard") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "paper" && computerChoice === "alien") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "scissors" && computerChoice === "lizard") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "lizard" && computerChoice === "paper") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "lizard" && computerChoice === "alien") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "alien" && computerChoice === "scissors") {
      newGame.player.wins += 1
      middleDialogueBox.innerText = "Player wins!"
    } else if (playerChoice === "alien" && computerChoice === "rock") {
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
    // changeButton.disabled = true 
    // setTimeout(startSpicyGame, 2200)
    disableButtons("spicy")
  }
}