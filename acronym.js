/*
objective is to make a simple string into an acronym
*/

function acronymMaker(str) {
    var output = "";
    var words = str.split(" ");
    for (x = 0; x < words.length; x++) {
        output += words[x].charAt(0);

    }
    output = output.toUpperCase();
    return output;

}
output = acronymMaker("Portable Network Graphics");
console.log(output);
