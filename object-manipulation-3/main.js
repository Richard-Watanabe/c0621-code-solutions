// We need to create four objects for each player with name and hand.
// We need to create a deck by assigning each number to each suit and value.
// We need to make sure the the card passed are randomized.
// We need to push two random cards into each player's hand.
// We need to make sure a card passed already is not passed again.
// We need to check the value of each card passed and add them.
// We need to find the player with the most points.
// We need to console out the winner.

console.log('Lodash is loaded:', typeof _ !== 'undefined');

var player1 = {
  name: 'Cody',
  hand: [],
  point: 0
};

var player2 = {
  name: 'Tim',
  hand: [],
  point: 0
};

var player3 = {
  name: 'Cass',
  hand: [],
  point: 0
};

var player4 = {
  name: 'TJ',
  hand: [],
  point: 0
};

var allPlayers = [player1, player2, player3, player4];
var deck = [];
var rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var value = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var first = 0;
var winningpoints = 0;
var winner;

for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    var card = { suit: suit[i], rank: rank[j], value: value[j] };
    deck.push(card);
  }
}

function shuffle() {
  var random = _.random(0, (deck.length - 1));
  return random;
}

for (var k = 0; k < allPlayers.length; k++) {
  for (var m = 0; m < 2; m++) {
    first = shuffle();
    allPlayers[k].hand.push(deck[first]);
    allPlayers[k].point = allPlayers[k].point + deck[first].value;
    _.remove(deck, deck[first]);
  }
}

for (var l = 0; l < allPlayers.length; l++) {
  if (allPlayers[l].point > winningpoints) {
    winningpoints = allPlayers[l].point;
    winner = allPlayers[l];
  }
}

console.log('The winner is', winner.name);
console.log('Points:', winningpoints);
