// Player.js
const Card = require('./Card');

class Player {
  constructor() {
    this.hand = [];
    this.score = 0;
  }

  playCard() {
    return this.hand.pop();
  }

  addToScore() {
    this.score++;
  }
}

module.exports = Player;
