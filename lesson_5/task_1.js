function setFigure(elementId, figure){
    let nowEl = document.getElementById(elementId);
    nowEl.innerHTML = figure;
}

let startValue, maxValue;
chessChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for (let y = 0; y <= 8; y++) {
    let newBigBlock = document.createElement('div');
    newBigBlock.className = "section";
    desk.appendChild(newBigBlock);

    if (y % 2 == 0){
        startValue = 0;
        maxValue = 8;
    } else {
        startValue = 1;
        maxValue = 9;
    }

    if (y) {
        for (startValue; startValue <= maxValue; startValue++){
            let newBlock = document.createElement('div');
            newBlock.id = String(y) + String(startValue);
            if (maxValue - startValue == 0) {
                newBlock.className = "number-block"
                newBlock.innerHTML = chessChars[y - 1]
            } else {
                if (startValue % 2 == 0) {
                    newBlock.className = "black-block";
                } else {
                    newBlock.className = "white-block";
                }
                if (startValue > maxValue / 2) {
                    newBlock.classList.add('white-figures')
                } else {
                    newBlock.classList.add('black-figures')
                }
            }


            newBigBlock.appendChild(newBlock);
        }
    } else {
        for (let x = 1; x <= 8; x++){
            let newBlock = document.createElement('div');
            newBlock.innerHTML = 9 - x;
            newBlock.id = x;
            newBlock.className = "number"
            newBigBlock.appendChild(newBlock);
        }
    }
}

// Размещаем шахматные фигуры.
const figuresPlaces = {
    "12": "П",
    "21": "П",
    "32": "П",
    "41": "П",
    "52": "П",
    "61": "П",
    "72": "П",
    "81": "П",
    "17": "П",
    "26": "П",
    "37": "П",
    "46": "П",
    "57": "П",
    "66": "П",
    "77": "П",
    "86": "П",

    "11": "Л",
    "80": "Л",
    "18": "Л",
    "87": "Л",

    "20": "Конь",
    "71": "Конь",
    "27": "Конь",
    "78": "Конь",
    
    "31": "Сл",
    "60": "Сл",
    "38": "Сл",
    "67": "Сл",
    
    "47": "Фр",
    "40": "Фр",
    "58": "К",
    "51": "К"
}

for (idx in figuresPlaces){
    setFigure(idx, figuresPlaces[idx]);
}
