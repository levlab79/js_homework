// The game. The first version.

function ourGame(ourNumb) {
    // Если число еще не задано.
    if (ourNumb === -1) {
        // Рандомно генерируем наше число.
        ourNumb = Math.floor(Math.random() * 8999 + 1000);
        // Если число уже известно.
    } else {
        // Запрашиваем число у пользователя.
        userNumb = +prompt('Угадайте число (0 - для выхода): ');
        // Проверяем число пользователя.
        if (userNumb === 0) {
            alert("Игра завершена!");
            return;
        } else if (userNumb === ourNumb) {
            alert("Вы угадали число!");
            return;
        } else if (userNumb > ourNumb) {
            alert("Ваше число больше!")
        } else {
            alert("Ваше число меньше!")
        }
    }
    ourGame(ourNumb);
}

// Начинаем игру.
ourGame(-1);
