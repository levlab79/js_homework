// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3 "мб 5?") и вернуть полученное значение (использовать switch).

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

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "sum":
            return mySum(arg1, arg2);
        case "subtraction":
            return mySubtraction(arg1, arg2);
        case "multiplication":
            return myMultiplication(arg1, arg2);
        case "division":
            return myDivision(arg1, arg2);
    }
}


let a = 10, b = -2;

alert( mathOperation(a, b, "sum") ); // 10 + (-2) = 8
alert( mathOperation(a, b, "subtraction") ); // 10 - (-2) = 12
alert( mathOperation(a, b, "multiplication") ); // 10 * (-2) = -20
alert( mathOperation(a, b, "division") ); // 10 / (-2) = -5
