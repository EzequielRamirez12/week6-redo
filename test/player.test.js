// test/player.test.js
const assert = require('chai').assert;
const Player = require('../Player');

describe('Player', function() {
  describe('#playCard()', function() {
    it('should return a valid card object', function() {
      const player = new Player();
      player.hand = [ { suit: 'Hearts', rank: 'Ace', value: 14 } ];

      const playedCard = player.playCard();
      assert.deepEqual(playedCard, { suit: 'Hearts', rank: 'Ace', value: 14 });
    });
  });
});
