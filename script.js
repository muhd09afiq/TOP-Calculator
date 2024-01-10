

const numberBtn = document.querySelectorAll('[numberBtn]');
const display = document.querySelector(".display");

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    display.append(button.textContent);
    displayValue = display.textContent * 1;
  })
})

const operandBtn = document.querySelectorAll('[operandBtn]');

operandBtn.forEach(button => {
  button.addEventListener('click', () => {
    
  })
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  display.textContent = '';
  displayValue = 0;
})

let displayValue;
let a;
let b;

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

let operator = "";
let total = 0;

const operate = function (operator, a, b) {
  return operator(a, b);
};

