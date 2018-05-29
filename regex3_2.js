/*
objective is to check if the words dog, cat, or chicken is in a string
*/

function animalCount(str) {
    re = /\b (dog|cat|chicken)s?\b/i;
    output = re.test(str);
    return output;
}

console.log(animalCount("Jeremy has a nice fluffy dog.")); // -----> true
console.log(animalCount("Hayden likes food.")); // -----> false
