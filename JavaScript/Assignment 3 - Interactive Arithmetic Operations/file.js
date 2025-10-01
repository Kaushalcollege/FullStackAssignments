// First we have to use strict mode in our JavaScript code
"use strict";

// Now we have to get all the required elements from the DOM.

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const calculate = document.getElementById("calculate");
const clear = document.getElementById("clear");

// Now the error message elements:-
const numAError = document.getElementById("numA-error");
const numBError = document.getElementById("numB-error");
const oprError = document.getElementById("opr-error");

// Now the result and history container elements:-
const resultContainer = document.getElementById("result-container");
const historyContainer = document.getElementById("history-container");

// Now we need a history array to store the history of calculations
let history = []; // Use let to avoid redeclaration errors and allow reassignment

// Function to validate inputs within the fields of num1, num2 and operation
function validate(a, b, oper) {
  // initially the error messages are:-
  numAError.textContent = "";
  numBError.textContent = "";
  oprError.textContent = "";

  // Now we have to check if the inputs are empty or not:-
  if (a === "" || b === "") {
    if (a === "") numAError.textContent = "Inputs cannot be left blank.";
    if (b === "") numBError.textContent = "Inputs cannot be left blank.";
    return false; // return false if any of the inputs is empty -- (flase for the function as this is a validation function)
  }

  // Now we have to check if the inputs are valid numbers or not:-
  if (isNaN(a)) {
    numAError.textContent = "Please enter valid numbers.";
    return false; // return false if the input is not a valid number
  }
  if (isNaN(b)) {
    numBError.textContent = "Please enter valid numbers.";
    return false; // return false if the input is not a valid number
  }

  // Now we have to check if the operation is division and the second number is zero or not:-
  if (oper === "divide" && b === "0") {
    oprError.textContent = "Division by zero is not allowed.";
    return false; // return false if the operation is division and the second number is zero.
  }

  return true; // return true if all the validations are passed.
}

// Now we have to add an event listener to the calculate button:-
calculate.addEventListener("click", () => {
  const a = num1.value;
  const b = num2.value;
  const oper = operation.value;

  // Now we have to validate the inputs:-
  if (!validate(a, b, oper)) return; // if the inputs are not valid, return from the function.
  // Now we have to perform the operation:-
  const numA = Number(a);
  const numB = Number(b);
  let result;
  let expression; // to store the expression of the operation performed.

  switch (oper) {
    case "add":
      result = numA + numB;
      expression = `${numA} + ${numB} = ${result}`;
      break;
    case "subtract":
      result = numA - numB;
      expression = `${numA} - ${numB} = ${result}`;
      break;

    case "multiply":
      result = numA * numB;
      expression = `${numA} * ${numB} = ${result}`;
      break;

    case "divide":
      result = numA / numB;
      expression = `${numA} / ${numB} = ${result}`;
      break;
  }

  // Now we have to display the result:-
  resultContainer.textContent = `Result: ${expression}`;

  // Now we have to add the expression to the history array:-
  history.push(expression);

  // Now we have to render the history:-
  renderHistory();
});

clear.addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
  operation.selectedIndex = 0;
  numAError.textContent = "";
  numBError.textContent = "";
  oprError.textContent = "";
  resultContainer.textContent = "";
  history = [];
  historyContainer.textContent = "";
});

function renderHistory() {
  historyContainer.innerHTML = history.join("<br>");
}
