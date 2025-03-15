function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    let res = ++n
    return res;
}
function decrement(n) {
    let res = --n
    return res;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}

console.log(increment(99));
console.log(decrement(60));