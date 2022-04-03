
//Button class section
const button = document.getElementsByClassName("calculator__button");
const numbers = document.querySelectorAll(".calculator__number");
const operators = document.querySelectorAll(".calculator__operator");
const display = document.querySelector(".calculator__display");

//individual button section
const clear = document.querySelector(".calculator__clear");
const plusMinus = document.querySelector(".calculator__plus-or-minus");
const percent = document.querySelector(".calculator__percent");
const decimal = document.querySelector(".calculator__button-decimal");
const equals = document.querySelector("#equals");

//global variable
let storedNumber = "";
let storedOperator = "";


//More specific variables
family = ["Cheyenne", "Ryan", "Cheeseburger the Argeninian Tegu"]
console.log(family[0]);


// map method to call back functions by their symbol
const operatorsSpecific = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  'X': (a, b) => a * b,
  '÷': (a, b) => a / b,
  '%': (a, b) => a / b
};

//Functions
clear.addEventListener("click", () => {
  display.innerHTML = "";
})


//Experimented with string manipulation here (not working)
percent.addEventListener("click", () => {
    console.log(percent.innerHTML);
    if (display.innerHTML.includes ("%")) {
      display.innerHTML = display.innerHTML.slice(display.length, display.length - 1);
        } else {
      display.innerHTML = display.innerHTML + "%";
    }
  })
//I was able to get this working though
plusMinus.addEventListener("click", () => {
  console.log("-");
  if (display.innerHTML.includes("-")) {
    display.innerHTML = display.innerHTML.substring(1, display.length);
     } else {
    display.innerHTML = "-" + display.innerHTML;
    }
})
//forEach allows me to call the numbers without making a function for each button
numbers.forEach(number => {
  number.addEventListener("click", () => {
    console.log(number.innerHTML);
    if (display.innerHTML === '0') {
      display.innerHTML = number.innerHTML
    } else {
      display.innerHTML += number.innerHTML
    }
  })
})

operators.forEach(operator => {
 operator.addEventListener("click", () => {
  console.log(operator.innerHTML);
  if (display.innerHTML != '0') {
    storedOperator = operator.innerHTML; 
    storedNumber = display.innerHTML;
    console.log(storedNumber)
  }
  display.innerHTML = "";
})
})

decimal.addEventListener("click", () => {
  console.log(decimal)
  if (!display.innerHTML.includes("."))
  display.innerHTML += decimal.innerHTML
})

equals.addEventListener("click", () => {
  console.log(equals);
  console.log(parseFloat(storedNumber), storedOperator, parseFloat(display.innerHTML))
  const operatorFunction = operatorsSpecific[storedOperator];
  const total = operatorFunction(parseFloat(storedNumber), parseFloat(display.innerHTML));
  display.innerHTML = total;
}
)


/* Found Errors:
. Percentage doesn't remover when pressed a second time, and doesnt function as a percentage
. Error with some calculations, such as 1.5 + 0.53
. Display does not change size when number exceeds display length



*/