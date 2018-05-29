/*
objective is to check for duplicates in a string
*/

function noDuplicates(phrase){
    var output = "";
    copies = 0;
    var words = phrase.split(" ");
    words.sort();
    for (i = 0; i < words.length; i ++) {
        if (words[i] == words[i + 1]) {
            copies += 1;
        }
        
    }
    if (copies > 0) {
        output = "no";
    } 
    else {
        output = "yes";
    }
    return(output);
}

var output = noDuplicates("IN THE RAIN AND THE SNOW");
console.log(output);

var output = noDuplicates("THE RAIN IN SPAIN");
console.log(output);
