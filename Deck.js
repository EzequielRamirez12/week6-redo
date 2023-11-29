// Deck.js
const Card = require('./Card');

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffle();
  }

  createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    for (const suit of suits) {
      for (const rank of ranks) {
        const value = ranks.indexOf(rank) + 2;
        this.cards.push(new Card(suit, rank, value));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numCards, players) {
    for (let i = 0; i < numCards; i++) {
      for (const player of players) {
        player.hand.push(this.cards.pop());
      }
    }
  }
}

module.exports = Deck;
