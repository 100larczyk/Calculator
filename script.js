// global varaibles
const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const addNumber = document.querySelector(".add");
const subtractNumber = document.querySelector(".subtract");
const multiplyNumber = document.querySelector(".multiply");
const divideNumber = document.querySelector(".divide");

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
let inputedNumber = {};
//display i number.forEach stwarzają i przechwują wpisaną liczbę do czasu następnej liczby wpisanej przez użytkownika
function display(event) {
  const numberClicked = event.target.value;
  output.textContent += numberClicked; //pokazuje kolejne po sobie klinięte liczby na wyświetlaczu
  inputedNumber.number = parseInt(output.textContent);
  console.log(inputedNumber.number);
}
number.forEach((number) => number.addEventListener("click", display));

let result = {};
clear.addEventListener(
  "click",
  () => delete inputedNumber.number,
  delete result.total
);

/* funkcja, która po kliknięciu w operator: 
 1)uzyskuje wartość inputedNumber.number jako argument a;
 2)kasuje zawatość wyświetlacza;
 3)uzyskuje wartość inputedNumber.number, która jest nową wpisaną przez użytkownika liczbą jako argument c; (muszę zrobić if (kliknięto któryś operator) (użyj inputedNumber jako argument c))
 4)wywołuje funkcję operate;*/
