// ### 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function myPower(val, pow) {
    // Вызываем функцию еще раз, но с уменьшенной на единицу степенью.
    return val * (Boolean(pow - 1) ? myPower(val, --pow) : 1);
}
  
let value = 2; // число
let power = 10; // степень

let result = myPower(value, power); // 2^10 = 1024
alert( result );
  
