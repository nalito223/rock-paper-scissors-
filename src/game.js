class Game {
  constructor() {
    this.player = new Player("player", "🧠")
    this.computer = new Player("computer", "💻")
    this.classicOptionsArray = ["rock", "paper", "scissors"]
    this.spicyOptionsArray = ["rock", "paper", "scissors", "alien", "lizard"]
    this.currentGameType
    this.currentGameOutcome 
  }
}