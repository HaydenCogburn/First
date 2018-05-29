/*
objective is to verify a username that is in the following format
(name)_(birth-year) ex: george_ 67
*/

function userName(str) {
    re = /^\w+[_]\d\d$/i;
    output = re.test(str);
    return output;
}

console.log(userName('bob_68')); // -------> true

console.log(userName('jimBob72')); // ------> false
