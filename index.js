// Code your solutions in this file
const cards = ["Ada", "Brendan", "Ali"];


function writeCards(cards, event) {
    for (let i = 0; i < cards.length; i++) {
        cards.splice(i, 1, `Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}

writeCards(cards, "birthday");


function countDown(x) {
    while (x >= 0 ) {
        console.log(x--);
    }
}

