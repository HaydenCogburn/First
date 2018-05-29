/* objective is to count the number of vowels
in a string without using any if statements or for loops
*/

function countVowels(str) {
    re = /[aeiou]/gi;
    output = str.match(re);
    return output.length;
}

console.log(countVowels("Hello")); // -----> 2
console.log(countVowels("Jeremy is totally kool")); // -----> 7
