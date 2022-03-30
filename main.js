
//Button section
const button = document.getElementsByClassName("calculator__button");
const numbers = document.querySelectorAll(".calculator__number");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".calculator_operator");
const display = document.querySelector(".calculator__display")

// create a variable for each button loop - eventlisten - onclick
console.log(numbers[0]);
//print buttons to console 

numbers.forEach(number => {
  number.addEventListener("click", () => {
    console.log(number)
  })
  number.appendChild(display);
})
