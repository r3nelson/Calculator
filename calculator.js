"use strict";
console.log("test");
// display
const calculator_screen = document.getElementById("calculator-screen");
const cursor = document.getElementById("cursor");

// buttons
const zero_button = document.getElementById("0");
const one_button = document.getElementById("1");
const two_button = document.getElementById("2");
const three_button = document.getElementById("3");
const four_button = document.getElementById("4");
const five_button = document.getElementById("5");
const six_button = document.getElementById("6");
const seven_button = document.getElementById("7");
const eight_button = document.getElementById("8");
const nine_button = document.getElementById("9");

// operators
const all_operators = document.querySelectorAll(".operator");
const add_button = document.getElementById("addition");
const subtract_button = document.getElementById("subtract");
const multiply_button = document.getElementById("multiply");
const divide_button = document.getElementById("divide");

// symbols
const decimal_button = document.getElementById("decimal");
const negative_button = document.getElementById("negative");
const square_root_button = document.getElementById("square-root");
const exponent_button = document.getElementById("exponent");
const pi_button = document.getElementById("pi");
const equal_sign_button = document.getElementById("equal-sign");
const clear_button = document.getElementById("clear");
const backspace_button = document.getElementById("backspace");
const open_parenthesis_button = document.getElementById("open-parenthesis");
const close_parenthesis_button = document.getElementById("close-parenthesis");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function add(...args) {
  return args.reduce(function (acc, cur) {
    return acc + cur;
  });
}

function subtract(...args) {
  return args.reduce(function (acc, cur) {
    return acc - cur;
  });
}

function multiply(...args) {
  return args.reduce(function (acc, cur) {
    return acc * cur;
  });
}

// think about divison by 0
function divide(...args) {
  return args.reduce(function (acc, cur) {
    return acc / cur;
  });
}

function modulo(...args) {
  return args.reduce(function (acc, cur) {
    return acc % cur;
  });
}

function exponent(...args) {
  return args.reduce(function (acc, cur) {
    return acc ** cur;
  });
}
function createArrayOfDisplayValues() {
  const value = calculator_screen.value.replaceAll(" ", "");
  const find_whole_numbers = /[+\-x÷]/g;
  const stringNumbers = value.split(find_whole_numbers);
  // console.log(numbers);

  const numbers = [];
  stringNumbers.forEach((num) => numbers.push(Number(num)));
  return numbers;
}

function createArrayOfDisplayOperators() {
  const value = calculator_screen.value.replaceAll(" ", "");

  const find_operators = /\d+/g;
  const unfiltered_operators = value.split(find_operators);

  const operators = [];
  unfiltered_operators.forEach((ele) => {
    if (ele === "") return;
    else operators.push(ele);
  });

  // console.log(unfiltered_operators);
  // console.log(operators);

  return operators;
}

function PEMDAS() {
  let total = 0;
  const valueArray = createArrayOfDisplayValues();
  const operatorArray = createArrayOfDisplayOperators();
  console.log(calculator_screen.value);
  console.log(valueArray);
  console.log(operatorArray);

  // if exponent in array: take index of where exponent is in array list
  // operatorArray.forEach(operator, (i) => {
  //   if (operator === "^") total += exponent(valueArray[i], valueArray[i + 1]);
  //   if (operator === "x") total += multiply(valueArray[i], valueArray[i + 1]);
  //   if (operator === "÷") total += divide(valueArray[i], valueArray[i + 1]);
  //   if (operator === "+") total += add(valueArray[i], valueArray[i + 1]);
  //   if (operator === "-") total += subtract(valueArray[i], valueArray[i + 1]);
  // });
}

function addSqaureRootToDisplay() {
  return;
}

function addPiToDisplay() {}

function clearDisplay() {
  calculator_screen.value = "0";
}

function backspaceDisplay() {
  const last_space = calculator_screen.value.slice(-1);

  if (calculator_screen.value.length === 1) {
    calculator_screen.value = "0";
    return;
  }

  if (last_space === " ")
    calculator_screen.value = calculator_screen.value.slice(0, -3);
  else calculator_screen.value = calculator_screen.value.slice(0, -1);
}

function addValueToDisplay(input) {
  if (calculator_screen.value === "0") calculator_screen.value = "";

  calculator_screen.value += input;
}

function addOperatorToDisplay(input) {
  const operators = ["+", "-", "÷", "x"];

  // check if display is empty
  if (calculator_screen.value === "0" || calculator_screen.value == "") return;

  // if previous two spaces contain an operator
  let value = calculator_screen.value.slice(-2);
  value = value.replaceAll(" ", "");

  // add check to make sure operator doesn't follow operator
  if (operators.includes(value)) {
    alert(`improper syntax: ${value}${input}`);
    return;
  } else addValueToDisplay(input);
}

function addDecmialToDisplay() {
  if (calculator_screen.value.includes(".")) return;
  else calculator_screen.value += ".";
}

function addSqaureRootToDisplay() {
  // const last_two_spaces = calculator_screen.value.slice(-2);
  // if (last_two_spaces !== "√(") addValueToDisplay("√(");
  addValueToDisplay("√(");
}

function addOpenParenthesisToDisplay() {
  return;
}

function addCloseParenthesisToDisplay() {
  // can't have close before open
  // num open must equal num close - 1 before we add close
  let open_count = 0;
  let close_count = 0;

  for (let i = 0; i < calculator_screen.value.length; i++)
    if (calculator_screen.value[i] === "(") open_count += 1;
    else if (calculator_screen.value[i] === ")") close_count += 1;

  if (open_count > close_count) addValueToDisplay(")");
}
function addNegativeToDisplay() {
  const last_space = calculator_screen.value.slice(-1);

  // not --   [can't have negative followed by negative]
  if (last_space === "-") {
    alert(
      "cannot place a negative by a negative without operator or number in between"
    );
    return;
  }

  // not num- [can't have number followed by negative]
  const number_regex = /[0-9]/g;
  if (number_regex.test(last_space) && calculator_screen.value !== "0") {
    alert("cannot put a negative after a number");
    return;
  }

  const reversedString = reverseString(calculator_screen.value);

  // not -num- [can't have negative number negative]
  [...reversedString].forEach((char, i, arr) => {
    if (number_regex.test(char) && arr[i + 1] === "-") return;
  });

  addValueToDisplay("-");
}

function getDisplayValue() {
  const x = parseFloat(calculator_screen.value);
  console.log(typeof x);
  console.log(x);
  return x;
}

// event listeners

// number buttons
zero_button.addEventListener("click", function () {
  addValueToDisplay(0);
});
one_button.addEventListener("click", function () {
  addValueToDisplay(1);
});
two_button.addEventListener("click", function () {
  addValueToDisplay(2);
});
three_button.addEventListener("click", function () {
  addValueToDisplay(3);
});
four_button.addEventListener("click", function () {
  addValueToDisplay(4);
});
five_button.addEventListener("click", function () {
  addValueToDisplay(5);
});
six_button.addEventListener("click", function () {
  addValueToDisplay(6);
});
seven_button.addEventListener("click", function () {
  addValueToDisplay(7);
});
eight_button.addEventListener("click", function () {
  addValueToDisplay(8);
});
nine_button.addEventListener("click", function () {
  addValueToDisplay(9);
});

// operator buttons
add_button.addEventListener("click", () => addOperatorToDisplay(" + "));
subtract_button.addEventListener("click", () => addOperatorToDisplay(" - "));
divide_button.addEventListener("click", () => addOperatorToDisplay(" ÷ "));
multiply_button.addEventListener("click", () => addOperatorToDisplay(" x "));

// other buttons
decimal_button.addEventListener("click", addDecmialToDisplay);
negative_button.addEventListener("click", addNegativeToDisplay);

// actually make square root button work
square_root_button.addEventListener("click", addSqaureRootToDisplay);
exponent_button.addEventListener("click", () => addValueToDisplay("^"));
pi_button.addEventListener("click", () => addValueToDisplay("π"));
equal_sign_button.addEventListener("click", PEMDAS);

clear_button.addEventListener("click", clearDisplay);
backspace_button.addEventListener("click", backspaceDisplay);
open_parenthesis_button.addEventListener("click", () => addValueToDisplay("("));
close_parenthesis_button.addEventListener(
  "click",
  addCloseParenthesisToDisplay
);
