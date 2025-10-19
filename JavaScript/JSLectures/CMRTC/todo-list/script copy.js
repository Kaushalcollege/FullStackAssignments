let paraEle = document.createElement("p");
let paraEle1 = document.createElement("p");
let paraEle2 = document.createElement("p");

let divEle = document.querySelector(".temp");

paraEle.textContent = "hello";
paraEle1.textContent = "world";
paraEle2.textContent = "CMR";
paraEle.classList.add("ptext");
divEle.appendChild(paraEle);
divEle.appendChild(paraEle1);
divEle.classList.add("colBlue");

divEle.insertAdjacentElement("afterbegin", paraEle2);
// divEle.insertAdjacentHTML("afterbegin", "<h3>qwerty</h3>");

// setTimeout(() => {
// 	divEle.classList.remove("colBlue");
// }, 2000);

console.log(paraEle.classList, divEle.classList);
