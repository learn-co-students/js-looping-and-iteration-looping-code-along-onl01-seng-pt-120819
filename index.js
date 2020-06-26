// Code your solutions in this file

function writeCards(names, word) {
    name = []
    for (let i = 0; i < names.length; i ++)
    {
        name.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`);
    }
    return name
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--)
    }
}