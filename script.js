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

let firstInteger = 0;
let secondInteger = 0;
let operator = "";

const operate = function (operator, a, b) {
  return operator(a, b);
};

//Create the functions that populate the display when you click the number buttons.
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.
let currentValue = 0;

const btn1 = document.getElementById('btn1').addEventListener('click', () => {
    currentValue = currentValue * 10 + 1;
    document.querySelector('.display').textContent = currentValue;
});
const btn2 = document.getElementById('btn2').addEventListener('click', () => {
    currentValue = currentValue * 10 + 2;
    document.querySelector('.display').textContent = currentValue;
});
const btn3 = document.getElementById('btn3').addEventListener('click', () => {
    currentValue = currentValue * 10 + 3;
    document.querySelector('.display').textContent = currentValue;
});
const btn4 = document.getElementById('btn4').addEventListener('click', () => {
    currentValue = currentValue * 10 + 4;
    document.querySelector('.display').textContent = currentValue;
});
const btn5 = document.getElementById('btn5').addEventListener('click', () => {
    currentValue = currentValue * 10 + 5;
    document.querySelector('.display').textContent = currentValue;
});
const btn6 = document.getElementById('btn6').addEventListener('click', () => {
    currentValue = currentValue * 10 + 6;
    document.querySelector('.display').textContent = currentValue;
});
const btn7 = document.getElementById('btn7').addEventListener('click', () => {
    currentValue = currentValue * 10 + 7;
    document.querySelector('.display').textContent = currentValue;
});
const btn8 = document.getElementById('btn8').addEventListener('click', () => {
    currentValue = currentValue * 10 + 8;
    document.querySelector('.display').textContent = currentValue;
});
const btn9 = document.getElementById('btn9').addEventListener('click', () => {
    currentValue = currentValue * 10 + 9;
    document.querySelector('.display').textContent = currentValue;
});
const btn0 = document.getElementById('btn0').addEventListener('click', () => {
    currentValue = currentValue * 10 + 0;
    document.querySelector('.display').textContent = currentValue;
});

const clearValue = document.getElementById('clear').addEventListener('click', () => {
    currentValue = 0;
    document.querySelector('.display').textContent = currentValue;
})



