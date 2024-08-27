const add = (a, b) => a + b;
  
const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operators = ["+", "-", "*", "/"];

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};

let firstNum = "";
let secondNum = "";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentOperator = ""; // Track the current operator

buttons.forEach((button) => {
  button.addEventListener("click", e => {
    const value = e.target.innerText;

    if (value === "C") {
      firstNum = "";
      secondNum = "";
      currentOperator = "";
      display.textContent = "0";
    } else if (operators.includes(value)) { 
      currentOperator = value; // Set the operator
    } else if (value === "=") {
      // Perform the operation
      const result = operate(parseFloat(firstNum), parseFloat(secondNum), currentOperator);
      display.textContent = result;
      firstNum = result.toString(); // Update firstNum to the result for further operations
      secondNum = ""; 
      currentOperator = "";
    } else {
      if (currentOperator === "") {
        firstNum += value;
        display.textContent = firstNum;
      } else {
        secondNum += value;
        display.textContent = secondNum;
      }
    }
  });
});
