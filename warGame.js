// warGame.js
const Deck = require('./Deck');
const Player = require('./Player');

function playWarGame() {
  const deck = new Deck();
  const player1 = new Player();
  const player2 = new Player();

  deck.deal(26, [player1, player2]);

  while (player1.hand.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();

    if (card1.value > card2.value) {
      player1.addToScore();
    } else if (card1.value < card2.value) {
      player2.addToScore();
    }
  }

  console.log('Game Over!');
  console.log('Player 1 Score:', player1.score);
  console.log('Player 2 Score:', player2.score);
  if (player1.score > player2.score) {
    console.log('Player 1 Wins!');
  } else if (player1.score < player2.score) {
    console.log('Player 2 Wins!');
  } else {
    console.log('It\'s a Tie!');
  }
}

playWarGame();
