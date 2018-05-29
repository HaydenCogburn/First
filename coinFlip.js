/*
objective is to output a random coi flip of 10 coins
*/

var heads = 0;
var tails = 0;

for (i = 0; i < 10; i++) {
    var num = Math.floor(Math.random() * 20);
    if (num % 2 === 0) {
        heads += 1;
    }
    if (num % 2 == 1){
        tails += 1;
    }
}
console.log("Heads: " + heads);
console.log("Tails: " + tails);
