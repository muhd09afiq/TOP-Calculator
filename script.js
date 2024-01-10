const numberBtn = document.querySelectorAll("[numberBtn]");
const display = document.querySelector(".display");

//Number function
numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    
    display.append(button.textContent);
    displayValue = display.textContent * 1;
  });
});

const operatorBtn = document.querySelectorAll("[operatorBtn]");

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "+":
        operator = add;
        break;
      case "-":
        operator = subtract;
        break;
      case "x":
        operator = multiply;
        break;
      case "/":
        operator = divide;
        break;
    }
    if (!total){
      a = displayValue;
      displayValue = 0;
    }
  });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  display.textContent = "";
  displayValue = 0;
});

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
let total;

const operate = function (operator, a, b) {
  return operator(a, b);
};
