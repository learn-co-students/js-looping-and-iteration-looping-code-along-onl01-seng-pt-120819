const people = ["Ada", "Brendan", "Ali"];
const eventName = "suprise";
const thankYouMessage = [];

function writeCards(people, eventName){
    for (let i = 0; i < people.length; i++){
        thankYouMessage.push(`Thank you, ${people[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessage
}

function countDown(i){
    while (i >= 0){
        console.log(i);
        i-=1
    }
}
