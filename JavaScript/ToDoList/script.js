"use strict";

let paraEle = document.createElement("p");
let paraEle1 = document.createElement("p");
let paraEle2 = document.createElement("p");

let divEle = document.querySelector(".temp"); // can use sup or hello

paraEle.textContent = "hello";
paraEle1.textContent = "world";
paraEle2.textContent = "CMR";
paraEle.classList.add("ptext");

console.log(paraEle);
// <p class="ptext">hello</p>

paraEle.classList.add("ptext1");
console.log(paraEle);

console.log(paraEle.classList); // DOMTokenList(2) ['ptext', 'ptext1', value: 'ptext ptext1']

console.log(paraEle.classList.contains("ptext")); // true
console.log(paraEle.classList.contains("ptext2")); // false

console.log(divEle);

divEle.appendChild(paraEle);
console.log(divEle);

divEle.appendChild(paraEle1);
divEle.classList.add("colBlue"); // defined in the CSS file.

divEle.insertAdjacentElement("afterbegin", paraEle2);
divEle.insertAdjacentHTML("afterbegin", "<h3>qwerty</h3>");

setTimeout(() => {
  divEle.classList.remove("colBlue");
}, 2000);

console.log(paraEle.classList, divEle.classList);
