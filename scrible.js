const divideBtn = document
  .getElementById("divide")
  .addEventListener("click", () => {
    if (firstInteger != 0) {
      secondInteger = currentValue;
      currentValue = 0;
      operator = "+";
    } else {
      firstInteger = currentValue;
      
      operator = "/";
    }
  });