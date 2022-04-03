"use strict";

//Button class section
var button = document.getElementsByClassName("calculator__button");
var numbers = document.querySelectorAll(".calculator__number");
var operators = document.querySelectorAll(".calculator__operator");
var display = document.querySelector(".calculator__display"); //individual button section

var clear = document.querySelector(".calculator__clear");
var plusMinus = document.querySelector(".calculator__plus-or-minus");
var percent = document.querySelector("calculator__percent");
var decimal = document.querySelector(".calculator__button-decimal");
var equals = document.querySelector("#equals"); //More specific variables

family = ["Cheyenne", "Ryan", "Cheeseburger the Argeninian Tegu"];
console.log(family[0]); // map

var operatorsSpecific = {
  '+': function _(a, b) {
    return a + b;
  },
  '-': function _(a, b) {
    return a - b;
  },
  'X': function X(a, b) {
    return a * b;
  },
  '÷': function _(a, b) {
    return a / b;
  },
  '%': function _(a, b) {
    return a / b;
  }
};
var storedNumber = "";
var storedOperator = ""; //Functions
// const numberClick = (num) => {
//   console.log(num)
// }

clear.addEventListener("click", function () {
  display.innerHTML = "";
}); // create a variable for each button loop - eventlisten - onclick
//print buttons to console 

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    console.log(number.innerHTML);

    if (display.innerHTML === '0') {
      display.innerHTML = number.innerHTML;
    } else {
      display.innerHTML += number.innerHTML;
    }
  });
});
decimal.addEventListener("click", function () {
  console.log(decimal);
  display.innerHTML += decimal.innerHTML;
});
operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    console.log(operator.innerHTML);

    if (display.innerHTML != '0') {
      storedOperator = operator.innerHTML;
      storedNumber = display.innerHTML;
      console.log(storedNumber);
    }

    display.innerHTML = "";
  });
});
equals.addEventListener("click", function () {
  console.log(equals); // storedNumber = Math.storedNumber;
  // display.innerHTML = Math.display.innerHTML;

  console.log(parseInt(storedNumber), storedOperator, parseInt(display.innerHTML));
  var operatorFunction = operatorsSpecific[storedOperator];
  var total = operatorFunction(parseInt(storedNumber), parseInt(display.innerHTML));
  display.innerHTML = total;
}); // storedValue * display.innerHTML
//Parse string into intiger
// const multiply = () => {
//   storedDisplay = display.innerHTML + *
// }

/*  
    !! Combine what’s on the screen with your stored variable
    !!Now you have a big string of (for example) “45+67”
    !!You now need to split this into 3 parts
    !!The operator
    !!And two numbers
    !!Convert the two numbers from strings to integers
    !!Use an if/else to check what the operator is
*/
// 
//when you hit an operator the number needs to be stored in a separate variable e.g storedNumber, then when the equals key is hit you need to add display.innerhtml 
//operator needs to store variable
//store entered operator too
//equals means combne with stored variable and stored operator