/*
objective is to check for a valid social security number format
hint: format is XXX-XX-XXXX
*/

function socialSecurityNumber(str) {
    var re = /^\d{3}-\d{2}-\d{4}$/;
    var output = re.test(str);
    return output;
}

console.log(socialSecurityNumber("123-34-5678")); // ------> true
console.log(socialSecurityNumber("incorrect")); // ----------> false
