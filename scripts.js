const add = function(a,b) {
    return a + b;  
  };
  
const subtract = function(a,b) {
  return a - b;
};

const multiply = function(a,b) {
    return a * b;
  };

const divide = function(a,b) {
  return a / b;
};

let firstNum;
let secondNum;
let operator;

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