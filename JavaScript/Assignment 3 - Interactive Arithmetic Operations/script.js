"use strict";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");

const numAError = document.getElementById("numA-error");
const numBError = document.getElementById("numB-error");
const oprError = document.getElementById("opr-error");

const resultContainer = document.getElementById("result-container");
const historyContainer = document.getElementById("history-container");

let history = [];

function validateInputs(a, b, op) {
  numAError.textContent = "";
  numBError.textContent = "";
  oprError.textContent = "";

  if (a === "" || b === "") {
    if (a === "") numAError.textContent = "Inputs cannot be left blank.";
    if (b === "") numBError.textContent = "Inputs cannot be left blank.";
    return false;
  }

  if (isNaN(a)) {
    numAError.textContent = "Please enter valid numbers.";
    return false;
  }

  if (isNaN(b)) {
    numBError.textContent = "Please enter valid numbers.";
    return false;
  }

  if (op === "divide" && Number(b) === 0) {
    oprError.textContent = "Division by zero is not allowed.";
    return false;
  }

  return true;
}

calculateBtn.addEventListener("click", () => {
  const a = num1.value.trim();
  const b = num2.value.trim();
  const op = operation.value;

  if (!validateInputs(a, b, op)) return;

  const numA = Number(a);
  const numB = Number(b);
  let result;
  let expression;

  switch (op) {
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

  resultContainer.textContent = "Result: " + expression;
  history.push(expression);

  renderHistory();
});

clearBtn.addEventListener("click", () => {
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
