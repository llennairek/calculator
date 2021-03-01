const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const posneg = document.querySelector(".posneg");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");
const display = document.querySelector(".principal-display");
const equal = document.querySelector('.equal')
const displayOperator = document.querySelector(".small-operator")

let flag = true;

let result = "";
let operator = "";
let nextInput = "";

function getDigit() {
  let data = this.dataset.value;
  if (flag === true) {
    result += data;
    display.innerHTML = result;
  } else {
    nextInput += data;
    display.innerHTML = nextInput;
  }
}

function getOperator() {
  let data = this.dataset.value;
  operator = data;
  displayOperator.innerHTML = operator;
  flag = false;
}

function getPosNeg() {
  let data = this.dataset.value;
  if (flag === true) {
    result = -result;
    display.innerHTML = result;
  } else {
    nextInput = -nextInput;
    display.innerHTML = nextInput;
  }
}

function getClear() {
  result = "";
  operator = "";
  nextInput = "";
  flag = true;
  displayOperator.innerHTML = "";
  display.innerHTML = "0";
}

function getPoint() {
  let data = this.dataset.value;
  if (flag === true) {
    result += data;
    display.innerHTML = result;
  } else {
    nextInput += data;
    display.innerHTML = nextInput;
  }
}

function getResult() {
  switch (operator) {
    case "+":
      display.innerHTML = Number(result) + Number(nextInput)
      break;
    case "-":
      display.innerHTML = Number(result) - Number(nextInput)
      break;
    case "/":
      display.innerHTML = Number(result) / Number(nextInput)
      break;
    case "*":
      display.innerHTML = Number(result) * Number(nextInput)
      break;
    default:
      break;
  }

}


digits.forEach(digit => digit.addEventListener("click", getDigit));
operators.forEach(operator => operator.addEventListener("click", getOperator));
posneg.addEventListener("click", getPosNeg);
clear.addEventListener("click", getClear);
point.addEventListener("click", getPoint);
equal.addEventListener("click", getResult);