
//Button class section
const button = document.getElementsByClassName("calculator__button");
const numbers = document.querySelectorAll(".calculator__number");
const operators = document.querySelectorAll(".calculator__operator");
const display = document.querySelector(".calculator__display")

//individual button section

const clear = document.querySelector(".calculator__clear");
const plusMinus = document.querySelector(".calculator__plus-or-minus")
const percent = document.querySelector("calculator__percent");
const decimal = document.querySelector(".calculator__button-decimal");
const equals = document.querySelector("#equals");

//More specific variables
family = ["Cheyenne", "Ryan", "Cheeseburger the Argeninian Tegu"]
console.log(family[0])


// map
const operatorsSpecific = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  'X': (a, b) => a * b,
  '÷': (a, b) => a / b,
  '%': (a, b) => a / b
};

let storedNumber = "";
let storedOperator = "";


//Functions

// const numberClick = (num) => {
//   console.log(num)

// }

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



decimal.addEventListener("click", () => {
  console.log(decimal)
  display.innerHTML += decimal.innerHTML
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



equals.addEventListener("click", () => {
  console.log(equals);
  // storedNumber = Math.storedNumber;
  // display.innerHTML = Math.display.innerHTML;
  console.log(parseInt(storedNumber), storedOperator, parseInt(display.innerHTML))
  const operatorFunction = operatorsSpecific[storedOperator];
  const total = operatorFunction(parseInt(storedNumber), parseInt(display.innerHTML));
  display.innerHTML = total;
}
)

// storedValue * display.innerHTML


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