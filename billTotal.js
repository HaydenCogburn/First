/*
objective is to count the total of the bill cost
*/

function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    // tip 
    tipAmnt = preTaxAndTipAmount * 0.15;
    taxAmnt = preTaxAndTipAmount * 0.095;
    output = preTaxAndTipAmount + tipAmnt + taxAmnt;
    return output;
}


var output = calculateBillTotal(20);
console.log(output); // --> 24.9
