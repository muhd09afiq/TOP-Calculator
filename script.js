const add = function (a, b) {
    return a + b;
}
const subtract = function (a, b) {
    return a - b;
}
const multiply = function (a, b) {
    return a * b;
}
const divide = function (a, b) {
    return a / b;
}

let firstInteger = 0;
let secondInteger = 0;
let operator = '';

const operate = function (operator, a, b){
    return operator(a,b);   
}