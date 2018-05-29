/*
objective is to flip each pair of characters
*/

function flipPairs(input) {
    output = "";
    
    for (i = 1; i <= input.length; i += 2){
        output += input[i];
        output += input[i - 1];
        
    }
    return output;
}


var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
