// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.


function mySum(a, b) {
    return a + b;
}

function mySubtraction(a, b) {
    return a - b;
}

function myMultiplication(a, b) {
    return a * b;
}

function myDivision (a, b) {
    return a / b;
}


let a = -3, b = 11;

alert( mySum(-3, 11) ); // -3 + 11 = 8
alert( mySubtraction(-3, 11) ); // -3 - 11 = -14
alert( myMultiplication(-3, 11) ); // -3 * 11 = -33
alert( myDivision(-3, 11) ); // -3 / 11 = -0.2727272727272727
