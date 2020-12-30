/*

5.* Нарисовать пирамиду с помощью console.log, как показано на рисунке, только
    у вашей пирамиды должно быть 20 рядов, а не 5:

    x
    xx
    xxx
    xxxx
    xxxxx

    В моем случае:
    [Log]     x     (task_5.js, line 31)
    [Log]    xxx    (task_5.js, line 31)
    [Log]   xxxxx   (task_5.js, line 31)
    [Log]  xxxxxxx  (task_5.js, line 31)
    [Log] xxxxxxxxx (task_5.js, line 31)

*/

// Высота пирамиды.
const height = 20;

for (let level = 0; level < height; level++) {
    // Проходимся по режимам отрисовки пирамиды.
    let logString = '';
    // Ставим пробелы.
    for (let i = 0; i < height - 1 - level; i++) {
        logString += ' '
    }
    // Рисуем крестики.
    for (let i = 0; i < 1 + 2 * level; i++) {
        logString += 'x'
    }
    console.log(logString)
}
