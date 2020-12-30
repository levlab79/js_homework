/*
2. С этого урока начинаем работать с функционалом интернет-магазина.
    Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости
    корзины в зависимости от находящихся в ней товаров.

3. Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

function countBasketPrice(userBasket) {
    let ourSumm = 0;
    for (const userKey in userBasket.products) {
        // Прибавляем к общей сумме стоимость данного товара.
        ourSumm += userBasket.products[userKey].price;
    }
    return ourSumm;
}

const ourBasket = {
    products: [],
    totalPrice: 0
}

// Добавляем 100 разных товары в корзину.
for (let i = 1; i <= 100; i++) {
    const productName = 'product #' + String(i);
    // Генерируем стоимость товара.
    const productPrice = Math.floor(Math.random() * 8999 + 1000);
    // Помещаем товар в корзину.
    ourBasket.products.push({
        productName: productName,
        price: productPrice
    })
}

// Подсчитываем стоимость корзины.
ourBasket.totalPrice = countBasketPrice(ourBasket)
console.log("Итоговая стоимость корзины: " + String(ourBasket.totalPrice) + " BTC");
