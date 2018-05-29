/* objective is to write a simple right triangle formula to check
if triangle is right
hint: formla is a^2 +b^2 = c^2
*/

function rightTriangle(a, b, c) {
    a *= a;
    b *= b;
    c *= c;
    if (a + b == c) {
        output = true;
    }
    else {
        output = false;
    }
    return output;
}


rightTriangle(3, 4, 5);      // true;
rightTriangle(5, 6, 7);      // false
rightTriangle(5, 12, 13);    // true
