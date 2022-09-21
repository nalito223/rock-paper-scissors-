class Game {
  constructor() {
    this.humanPlayer = new Player("Human", "🧠")
    this.computerPlayer = new Player("Computer", "💻")
    this.humanScore = 0
    this.computerScore = 0
    this.draw = draw
    this.gameId = Date.now
  }
}