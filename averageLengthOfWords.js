/*
objectivge to find the average length of two words
*/

function computeAverageLengthOfWords(word1, word2) {
    var first_count = word1.length;
    var sec_count = word2.length;
    var avg = (first_count + sec_count) / 2;
    return avg;
    
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);
