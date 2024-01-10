const numberBtn = document.querySelectorAll("[numberBtn]");
const display = document.querySelector(".display");

const debuggerDisplay = document.querySelector(".debuggerDisplay");
debuggerDisplay.addEventListener("click", () => {
  if (display) {
    debuggerDisplay.textContent = display.textContent;
  }
});

//Number function
numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (!operator) {
      display.append(button.textContent);
      displayValue = display.textContent * 1;
      a = displayValue;
    } else if (!b && operator) {
      display.textContent = "";
      display.append(button.textContent);
      displayValue = display.textContent * 1;
      b = displayValue;
      total = operate(operator, a, b);
    } else {
      if (display.textContent == total) {
        display.textContent = "";
      }
      display.append(button.textContent);
      displayValue = display.textContent * 1;
      b = displayValue;
      total = operate(operator, a, b);
    }
  });
});

const operatorBtn = document.querySelectorAll("[operatorBtn]");

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if(operator){
      a = total;
    }
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
    if (b) {
      display.textContent = total;
    }
  });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  display.textContent = "";
  displayValue = 0;
  total = 0;
  a = 0;
  b = 0;
  operator = "";
});

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
  display.textContent = total;
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
