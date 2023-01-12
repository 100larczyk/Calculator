// global varaibles
const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const addNumber = document.querySelector(".add");
const subtractNumber = document.querySelector(".subtract");
const multiplyNumber = document.querySelector(".multiply");
const divideNumber = document.querySelector(".divide");
let result;

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

function operate(a, b, c) {
  if (b === "+") {
    console.log(add(a, c));
  } else if (b === "-") {
    console.log(subtract(a, c));
  } else if (b === "*") {
    console.log(multiply(a, c));
  } else if (b === "/") {
    console.log(divide(a, c));
  }
  return;
}
//apear clicked numbers on the calculaor display
number.forEach((number) =>
  number.addEventListener("click", function (event) {
    const numberClicked = event.target.value;
    output.textContent += numberClicked;
    result = parseInt(output.textContent);
    console.log(typeof result);
  })
);
