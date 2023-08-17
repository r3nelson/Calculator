"use strict";

// display
const calculator_screen = document.getElementById("calculator-screen");

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
const exponent_button = document.getElementById("exponent");

// symbols
const decimal_button = document.getElementById("decimal");
const pi_button = document.getElementById("pi");
const square_root_button = document.getElementById("square-root");
const equal_sign_button = document.getElementById("equal-sign");
const clear_button = document.getElementById("clear");
const backspace_button = document.getElementById("backspace");

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

function operator_logic() {
  // remove spaces from display value
  console.log(calculator_screen.value);
  let value = calculator_screen.value.replaceAll(" ", "");

  // need to fix regex so it splits into a list of nums
  // num0 num1 num2 etc.
  // I know there will have to be an operator between each num

  const regex = "/[+|-|x|/]/";
  console.log(value);
  value = value.split(regex);
  console.log(value);
  // for(i = 0; i < value.length; i++)
  //     if(value[i] === '+')
  //       add(c)
}
function addSqaureRootToDisplay() {
  return;
}

function clearDisplay() {
  calculator_screen.value = "0";
}

function backspaceDisplay() {
  calculator_screen.value = calculator_screen.value.slice(0, -1);
}

function addValueToDisplay(input) {
  if (calculator_screen.value === "0") calculator_screen.value = "";

  let temp = calculator_screen.value;
  calculator_screen.value = temp + input;
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
// add negative_button

// actually make square root button work
square_root_button.addEventListener("click", addSqaureRootToDisplay);
exponent_button.addEventListener("click", () => addValueToDisplay("^"));
// add pi_button
equal_sign_button.addEventListener("click", operator_logic);
clear_button.addEventListener("click", clearDisplay);
backspace_button.addEventListener("click", backspaceDisplay);
