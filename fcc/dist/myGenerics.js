"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[3];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunctin(valOne, valTow) {
    return {
        valOne,
        valTow
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
