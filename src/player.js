class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
    this.playerId = Date.now
  }
  takeTurn(selectedOption) {
  alert("this works!")
  // The listening event for this will be when the human clikcs one of the options. once clicked, this function will randomize the outcome for the computer and a winner/loser will be declared and updated in the data model. 
  }
}