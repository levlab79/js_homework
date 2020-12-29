// ### 7. *Сравнить null и 0. Попробуйте объяснить результат.


// Значения null и undefined равны друг другу, но не чему бы то ни было еще.
alert( null == 0 ); // false
alert( null === 0 ); // false

// При явном преобразовании в число (то есть вызванном пользователем) null принимает значение 0.
let nullNumber = Number(null)
alert( nullNumber == 0 ); // true
alert( nullNumber === 0 ); // true
