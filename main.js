
//Button class section
const button = document.getElementsByClassName("calculator__button");
const numbers = document.querySelectorAll(".calculator__number");
const operators = document.querySelectorAll(".calculator_operator");
const display = document.querySelector(".calculator__display")

//individual button section

const clear = document.querySelector(".calculator__clear");
const plusMinus = document.querySelector(".calculator__plus-or-minus")
const percent = document.querySelector("calculator__percent");
const decimal = document.querySelector(".calculator__button-decimal");
const equals = document.querySelector("#equals");

//More specific variables


//Functions

const numberClick = (num) => {
  console.log(num)

}

clear.addEventListener("click", () => {
  display.innerHTML = "";
})

// create a variable for each button loop - eventlisten - onclick
//print buttons to console 




numbers.forEach(number => {
  number.addEventListener("click", () => {
    console.log(number);
    if (display.innerHTML === '0') {
      display.innerHTML = number.innerHTML
    } else {
      display.innerHTML += number.innerHTML;
    }
  })
})
