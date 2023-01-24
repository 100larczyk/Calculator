const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const operator = document.querySelectorAll(".operator"); //znak
const currentOperationScreen = document.querySelector(
  ".currentOperationScreen"
);
const lastOperationScreen = document.querySelector(".lastOperationScreen");


const equal = document.querySelector(".equal");
const coma = document.querySelector('.coma');
const removeNumberButton = document.querySelector('.delete');


let firstOperand = "";
let currentOperation = null;
let secondOperand = "";
let shouldResetScreen = false;

equal.addEventListener('click', evaluate)

number.forEach((number) => number.addEventListener("click", handleNumberClick));
function handleNumberClick(event) {
  if ((currentOperationScreen.textContent === "0" || shouldResetScreen))
    resetScreen();
  currentOperationScreen.textContent += event.target.value;
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

operator.forEach((operator) =>
  operator.addEventListener("click", handleOperationClick)
);

function handleOperationClick(event) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentOperationScreen.textContent;
  currentOperation = event.target.value;
  lastOperationScreen.textContent = `${firstOperand} ${event.target.value}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return
  if (currentOperation === '/' && currentOperationScreen.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(operate(
    firstOperand,
    currentOperation,
    secondOperand
  ));
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

clearButton.addEventListener('click', clear)
function clear() {
let firstOperand = "";
let currentOperation = null;
let secondOperand = "";
let shouldResetScreen = false;
currentOperationScreen.textContent = '0';
lastOperationScreen.textContent = '';
}

removeNumberButton.addEventListener('click', removeNumber)
function removeNumber() {
currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0, -1)

}

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

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

