// Code your solutions in this file

const people = ["Ada", "Brendan", "Ali"];

function writeCards(people,event) {let thanks = [];
    for (let i = 0; i < people.length; i++) {
     thanks.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
    };
    return thanks
}
writeCards(people,event);



function countDown(){
let num = 10
while (num >= 0){
    console.log(num--);
} 
}
countDown()