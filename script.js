const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const operator = document.querySelectorAll(".operator"); //znak
const currentOperationScreen = document.querySelector(
  ".currentOperationScreen"
);
const lastOperationScreen = document.querySelector(".lastOperationScreen");

const addNumber = document.querySelector(".add");
const subtractNumber = document.querySelector(".subtract");
const multiplyNumber = document.querySelector(".multiply");
const divideNumber = document.querySelector(".divide");
const equal = document.querySelector(".equal");
//const allOperations = [addNumber, subtractNumber, multiplyNumber, divideNumber];
let firstOperand = "";
let currentOperation;
let lastOperand = "";
let lastOperation = 0;

number.forEach((number) => number.addEventListener("click", handleNumberClick));

function handleNumberClick(event) {
  firstOperand += event.target.value;
  console.log(firstOperand);
  currentOperationScreen.textContent = firstOperand;
}

// allOperations.forEach((number) =>
//   number.addEventListener("click", handleOperationClick)
// );

function handleOperationClick(event) {
  if (currentOperation) {
    firstNumber = operate(firstNumber, currentOperation, lastNumber);
    lastNumber = undefined;
    currentOperation = undefined;
    output.textContent = firstNumber;
    return;
  }
  currentOperation = event.target.value;
  output.textContent += currentOperation;
}

function clearAll() {
  currentOperation = 0;
  lastOperation = 0;
  result = 0;
  output.textContent = "";
}

clear.addEventListener("click", clearAll);

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

function operate(a, operator, c) {
  if (operator === "+") {
    return add(a, c);
  } else if (operator === "-") {
    return subtract(a, c);
  } else if (operator === "*") {
    return multiply(a, c);
  } else if (operator === "/") {
    return divide(a, c);
  }
}
