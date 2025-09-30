"use strict";

let inputElement = document.querySelector(".input");
let buttonElement = document.querySelector(".validateBtn");
let resultElement = document.querySelector(".result");

buttonElement.addEventListener("click", (e) => {
  console.log(inputElement.value);
});

console.log(inputElement);

inputElement.addEventListener("keyup", (event) => {
  let email = event.target.value;
  let ans = `${email}`.match(/[a-z0-9]+@[a-z]{3,5}\.com/);
  if (ans != null) {
    console.log("✅✅✅✅");
    resultElement.textContent = resultElement.textContent + "\n" + ans;
  }
});

console.log(inpEle.value);
