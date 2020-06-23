function writeCards(cards, surprise) {
    let array = [];
    for (let i = 0; i < cards.length; i++) { 
        array.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`); 
    }
    return array
}

function countDown(i) {
        while (i >= 0) {
        console.log(i--);
    }
}

