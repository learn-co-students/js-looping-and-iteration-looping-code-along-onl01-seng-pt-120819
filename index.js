// Code your solutions in this file
function writeCards(names) {
    let writtenCards = []
    for(let i=0; i < names.length; i++){
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return writtenCards
}

function countDown(number) {
    while(number >= 0){
        console.log(number);
        number--;
    }
}