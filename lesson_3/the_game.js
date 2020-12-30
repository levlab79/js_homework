// Усложним предыдущую игру. Соперник (компьютер, например), загадывает четырехзначное число,
// в котором не повторяются цифры. Ваша задача — угадать его. Число ходов можно ограничить.
// Подсказками выступают «коровы» (если цифра угадана, а ее позиция — нет) и «быки» (когда
// совпадает и цифра, и ее позиция). Если загадано число «1234», а вы называете «6531» — 
// результатом будет одна корова (цифра «1») и один бык (цифра «3»).


// Функция для генерирования числа для игры.
function genOurNumb() {
    while (true) {
        // Генерируем четырехзначное число.
        const ourNumb = Math.floor(Math.random() * 8999 + 1000);
        // Преобразовываем его в строку для удобства.
        const ourString = String(ourNumb);
        // Определяем переменную, которая означает, что число отвечает требованиям:
        // (четырехзначное число, в котором не повторяются цифры).
        let goodNumb = true
        // Проходимся по всем символам строки.
        for (let oneKey in ourString) {
            const nowChar = ourString[oneKey];
            let searchResult = 0
            // Проверяем повторяется ли такой символ больше 1 раза.
            for (let othKey in ourString) {
                if (nowChar === ourString[othKey]) {
                    searchResult++;
                }
            }
            // Проверяем результаты поиска.
            if (searchResult > 1) {
                // Значит цифра повторяется. Дальше нет смысла проверять.
                goodNumb = false;
                break;
            }
        }
        if (goodNumb) return { ourString: ourString, ourNumb: ourNumb };
    }
}


// Получаем информацию о коровах и других животных.
function checkOurFarm(ourString, userNumb) {
    const userString = String(userNumb);
    let ourCows = 0;
    let ourBulls = 0;
    // Проверяем каждую цифру.
    for (const userKey in userString) {
        // Получаем цифру пользователя.
        const userChar = userString[userKey];
        // Проверяем каждую цифру загаданного числа.
        for (const ourKey in ourString) {
            // Если совпадают и цифры и позиции.
            if (userChar === ourString[ourKey] && userKey === ourKey) {
                // То это бык.
                ourBulls++;
            // Если совпадают только цифры.
            } else if (userChar === ourString[ourKey]) {
                // То это корова.
                ourCows++;
            }
        }
    }
    if (ourCows || ourBulls) {
        return '\nБыков: ' + String(ourBulls) + '\nКоров: ' + String(ourCows);
    } else {
        return '';
    }
}


// Главная функция игры.
function ourGame() {
    // Генерируем число.
    const ourInfo = genOurNumb();
    while (true) {
        const userNumb = +prompt('Угадайте число (0 - выход): ');
        // Проверяем число.
        if (userNumb == 0) {
            alert('Игра завершена!');
            return;
        } else if (userNumb === ourInfo.ourNumb) {
            alert("Вы отгадали число!");
            return;
        } else if (userNumb > ourInfo.ourNumb) {
            alert("Ваше число больше!" + checkOurFarm(ourInfo.ourString, userNumb));
        } else {
            alert("Ваше число меньше!" + checkOurFarm(ourInfo.ourString, userNumb));
        }
    }
}


// Хочу сразу уточнить, что я использовал только те функции, методы и свойства,
// что мы проходили по программе. В ином случае код мог бы быть более красивым )
ourGame();
