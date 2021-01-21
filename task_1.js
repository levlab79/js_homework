// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и
// вернуть пустой объект.

function createObject(userNumber) {
  let result = {
    'единицы': 0,
    'десятки': 0,
    'сотни': 0
  };
  if (userNumber > 0 && userNumber <= 999) {
    let numbSize = String(userNumber).length;
    switch (numbSize) {
      case 3:
        result['сотни'] = Number(String(userNumber)[numbSize - 3]);
      case 2:
        result['десятки'] = Number(String(userNumber)[numbSize - 2]);
      case 1:
        result['единицы'] = Number(String(userNumber)[numbSize - 1]);
    }
  } else {
    result = {};
  }
  return result;
}


let value1 = 142;
let value2 = 93;
let value3 = 8;
let value4 = 1021;

console.log(createObject(value1));
console.log(createObject(value2));
console.log(createObject(value3));
console.log(createObject(value4));
