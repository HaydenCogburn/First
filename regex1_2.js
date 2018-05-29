/*
objective is to check for whitespace inside a string
*/

function whiteSpace(str) {
    var re = /\s/;
    var output = re.test(str);
    return output;
}

console.log(whiteSpace("this is a test")); // -----> true
console.log(whiteSpace("thisIsATest")); // ------> false
