// Code your solutions in this file
function countDown(number){
    while ( number >= 0) { 
        console.log(number--)

    }

}



const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}

wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"]


function writeCards(names, event) {
    let thankyouMessages = []
    for (let i = 0; i < names.length; i++) {
        thankyouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 
    }
   return thankyouMessages 
}