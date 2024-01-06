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
let total = 0;

const operate = function (operator, a, b) {
  return operator(a, b);
};

//Create the functions that populate the display when you click the number buttons.
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.
let currentValue = 0;
let displayValue = function () {
  document.querySelector(".display").textContent = currentValue;
};

const btn1 = document.getElementById("btn1").addEventListener("click", () => {
  currentValue = currentValue * 10 + 1;
  firstInteger = currentValue;
  displayValue();
});
const btn2 = document.getElementById("btn2").addEventListener("click", () => {
  currentValue = currentValue * 10 + 2;
  firstInteger = currentValue;
  displayValue();
});
const btn3 = document.getElementById("btn3").addEventListener("click", () => {
  currentValue = currentValue * 10 + 3;
  firstInteger = currentValue;
  displayValue();
});
const btn4 = document.getElementById("btn4").addEventListener("click", () => {
  currentValue = currentValue * 10 + 4;
  firstInteger = currentValue;
  displayValue();
});
const btn5 = document.getElementById("btn5").addEventListener("click", () => {
  currentValue = currentValue * 10 + 5;
  firstInteger = currentValue;
  displayValue();
});
const btn6 = document.getElementById("btn6").addEventListener("click", () => {
  currentValue = currentValue * 10 + 6;
  firstInteger = currentValue;
  displayValue();
});
const btn7 = document.getElementById("btn7").addEventListener("click", () => {
  currentValue = currentValue * 10 + 7;
  firstInteger = currentValue;
  displayValue();
});
const btn8 = document.getElementById("btn8").addEventListener("click", () => {
  currentValue = currentValue * 10 + 8;
  firstInteger = currentValue;
  displayValue();
});
const btn9 = document.getElementById("btn9").addEventListener("click", () => {
  currentValue = currentValue * 10 + 9;
  firstInteger = currentValue;
  displayValue();
});
const btn0 = document.getElementById("btn0").addEventListener("click", () => {
  currentValue = currentValue * 10 + 0;
  firstInteger = currentValue;
  displayValue();
});

const clearValue = document
  .getElementById("clear")
  .addEventListener("click", () => {
    currentValue = 0;
    total = 0;
    displayValue();
  });

//Make the calculator work! You’ll need to store the first number and second number that are input
//into the calculator, utilize the operator that the user selects,
//and then operate() on the two numbers when the user presses the “=” key.

const addBtn = document.getElementById("add").addEventListener("click", () => {
  operator = "+";
  calculation();
});

const subtractBtn = document
  .getElementById("subtract")
  .addEventListener("click", () => {
    operator = "-";
    calculation();
  });

const multiplyBtn = document
  .getElementById("multiply")
  .addEventListener("click", () => {
    operator = "x";
    calculation();
  });

const divideBtn = document
  .getElementById("divide")
  .addEventListener("click", () => {
    operator = "/";
    calculation();
  });

let calculation = function () {
  switch (operator) {
    case "+":
      total = add(firstInteger, total);
      break;
    case "-":
      total = subtract(firstInteger, total);
      break;
    case "x":
      total = multiply(firstInteger, total);
      break;
    case "/":
      total = divide(firstInteger, total);
      break;
  }
  currentValue = total;
  displayValue();
  currentValue = 0;
  firstInteger = total;
};

const equal = document.getElementById("equal").addEventListener("click", () => {
  calculation();
  firstInteger = 0;
});
