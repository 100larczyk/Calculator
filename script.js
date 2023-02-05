const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const operator = document.querySelectorAll(".operator"); //znak
const currentOperationScreen = document.querySelector(
  ".currentOperationScreen"
);
const lastOperationScreen = document.querySelector(".lastOperationScreen");
const equal = document.querySelector(".equal");
const comabutton = document.querySelector(".coma");
const removeNumberButton = document.querySelector(".delete");

let firstOperand = "";
let currentOperation = null;
let secondOperand = "";
let shouldResetScreen = false;
currentOperationScreen.textContent = "0";

equal.addEventListener("click", evaluate);

number.forEach((button) =>
  button.addEventListener("click", () => handleNumberClick(button.textContent))
);

function handleNumberClick(number) {
  if (currentOperationScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

operator.forEach((button) =>
  button.addEventListener("click", () =>
    handleOperationClick(button.textContent)
  )
);

function handleOperationClick(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentOperationScreen.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand}${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "/" && currentOperationScreen.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(
    operate(firstOperand, currentOperation, secondOperand)
  );
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

clearButton.addEventListener("click", clear);
function clear() {
  firstOperand = "";
  currentOperation = null;
  secondOperand = "";
  shouldResetScreen = false;
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
}

removeNumberButton.addEventListener("click", removeNumber);
function removeNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
}

comabutton.addEventListener("click", addComa);
function addComa() {
  if (shouldResetScreen) resetScreen();
  if (currentOperationScreen.textContent === "")
    currentOperationScreen.textContent = "0";
  if (currentOperationScreen.textContent.includes(".")) return;
  currentOperationScreen.textContent += ".";
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

//check
