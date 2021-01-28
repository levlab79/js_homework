orderPrices = {
    1: 500,
    2: 200,
    3: 300,
    4: 150,
    5: 450
}


const cart = {
    nowPrice: 0,
    prices: orderPrices,

    addCartPrice(orderId) {
        this.nowPrice += this.prices[orderId];
        this.refreshPrice();
    },

    refreshPrice() {
        let cartEl = document.getElementById('total');
        cartEl.innerHTML = `<b>${this.nowPrice}</b>`;
    }
}

userElement = document.getElementById('orders');
userElement.addEventListener("click", function (e) {
    if (e.target.className == "order-button") {
        let cartBlock = document.getElementById('cart');
        cartBlock.appendChild(document.getElementById(e.target.id).parentNode);
        // Обновляем цену корзины.
        cart.addCartPrice(e.target.id);
    }
});
