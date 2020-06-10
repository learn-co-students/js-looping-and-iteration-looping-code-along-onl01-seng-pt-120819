// Code your solutions in this file
function writeCards(arr, event) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return output;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
