/*
Objective is to change C to F amd F to C
*/

function cToF(celsius) {
    var fah = ((celsius * 1.8) + 32);
    return console.log((celsius) + "\xB0" + "C is " + (fah) + "\xB0" + "F");
}

function fToC(fahrenheit) {
    var cel = ((5/9) * (fahrenheit - 32));
    return console.log((fahrenheit) + "\xB0" + "F is " + (cel) + "\xB0" + "C");
}

cToF(60);
fToC(45);
