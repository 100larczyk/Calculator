const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const addNumber = document.querySelector(".add");
const subtractNumber = document.querySelector(".subtract");
const multiplyNumber = document.querySelector(".multiply");
const divideNumber = document.querySelector(".divide");
const equal = document.querySelector(".equal");
let firstNumber = 0;
let currentOperation;
let lastNumber;
let lastOperation = 0;
const allOperations = [addNumber, subtractNumber, multiplyNumber, divideNumber];

number.forEach((number) => number.addEventListener("click", handleNumberClick));

function handleNumberClick(event) {
  const numberClicked = event.target.value;
  output.textContent += numberClicked;
  console.log({ firstNumber, currentOperation });
  if (firstNumber && currentOperation) {
    console.log({ lastNumber, numberClicked });
    lastNumber = lastNumber
      ? parseInt(`${lastNumber}${numberClicked}`)
      : parseInt(numberClicked);
  } else {
    firstNumber = parseInt(`${firstNumber}${numberClicked}`);
  }
  console.log({ firstNumber });
  console.log({ lastNumber });
}

allOperations.forEach((number) =>
  number.addEventListener("click", handleOperationClick)
);

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
