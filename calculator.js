'use strict'

// display
const calculator_screen = document.getElementById('calculator-screen')

// buttons
const zero_button = document.getElementById('0')
const one_button = document.getElementById('1')
const two_button = document.getElementById('2')
const three_button = document.getElementById('3')
const four_button = document.getElementById('4')
const five_button = document.getElementById('5')
const six_button = document.getElementById('6')
const seven_button = document.getElementById('7')
const eight_button = document.getElementById('8')
const nine_button = document.getElementById('9')

// operators
const add_button = document.getElementById('addition')
const subtract_button = document.getElementById('subtract')
const multiply_button = document.getElementById('multiply')
const divide_button = document.getElementById('divide')
const exponent_button = document.getElementById('exponent')

// symbols
const decimal_button = document.getElementById('decimal')
const pi_button = document.getElementById('pi')
const square_root_button = document.getElementById('square-root')
const equal_sign_button = document.getElementById('equal-sign')
const clear_button = document.getElementById('clear')
const backspace_button = document.getElementById('backspace')



function add(...args) {
    return args.reduce(function (acc, cur) {
      return acc + cur;
    })
  }

  function subtract(...args) {
    return args.reduce(function (acc, cur) {
      return acc - cur;
    })
  }

  function multiply(...args) {
    return args.reduce(function (acc, cur) {
      return acc * cur;
    })
  }

  // think about divison by 0
  function divide(...args) {
    return args.reduce(function (acc, cur) {
      return acc / cur;
    })
  }

  function modulo(...args) {
    return args.reduce(function (acc, cur) {
      return acc % cur;
    })
  }

  function exponent(...args) {
    return args.reduce(function (acc, cur) {
      return acc ** cur;
    })
  }

console.log(divide(10,5,0))

function clearDisplay() {
  calculator_screen.value = '0'
}

function addValueToDisplay (input) {

  if(calculator_screen.value === '0')
    calculator_screen.value = ''

  let temp = calculator_screen.value
  calculator_screen.value = temp + input
}
// event listeners

zero_button.addEventListener('click', function (){addValueToDisplay(0)})
one_button.addEventListener('click', function (){addValueToDisplay(1)})
two_button.addEventListener('click', function (){addValueToDisplay(2)})
three_button.addEventListener('click', function (){addValueToDisplay(3)})
four_button.addEventListener('click', function (){addValueToDisplay(4)})
five_button.addEventListener('click', function (){addValueToDisplay(5)})
six_button.addEventListener('click', function (){addValueToDisplay(6)})
seven_button.addEventListener('click', function (){addValueToDisplay(7)})
eight_button.addEventListener('click', function (){addValueToDisplay(8)})
nine_button.addEventListener('click', function (){addValueToDisplay(9)})

clear_button.addEventListener('click', function(){clearDisplay})