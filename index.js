function writeCards(cards, event) {
    let array = [];
    for (let i = 0; i < cards.length; i++) { 
        array << (`Thank you, ${cards[i]}, for the wonderful ${event} gift!,`); 
    }
    return array
}
