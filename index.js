// Code your solutions in this file

 const names = ["Ada", "Brendan", "Ali"]
 const day = "birthday"
 let thankYou = []

function writeCards(names, day) {
  for (let i = 0; i < names.length; i++) {
     thankYou.push(`Thank you, ${names[i]}, for the wonderful ${day} gift!`);
  }
 
  return thankYou
  
}



function countDown(number) {
    
    while (number >= 0) {
      console.log(number--);
       
    }
}