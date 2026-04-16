'use strict';

const taxRate = 0.2;

let stockPrice = 100;

let count = 20;

function computeTax(price, count) {
    return price * count * taxRate;
}

console.log(computeTax(stockPrice, count));