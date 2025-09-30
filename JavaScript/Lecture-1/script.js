// "use Strict";

// let a;
// let b;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof (a + b));

// let s = "12" * 4; // Implicit Type Conversion
// console.log(s);

// let n = "12" / 4;
// console.log(n);

// let m = "12" + 4;
// console.log(m);

// let p = "12" - 4;
// console.log(p);

// let q = "12" - "4";
// console.log(q);

// let r = "12" + "4"; // Concatenation
// console.log(r);

// let t = "12" * "4"; // Implicit Type Conversion
// console.log(t);

// let u = "12" / "4";
// console.log(u);

// // NaN - Not a Number
// let v = "12abc" * 4;
// console.log(v);
// console.log(typeof v);

// let w = "12abc" / 4;
// console.log(w);
// console.log(typeof w);

// let x = "12abc" - 4;
// console.log(x);
// console.log(typeof x);

// let y = "12abc" + 4;
// console.log(y);
// console.log(typeof y);

// // if ("1") {
// //   let g = prompt("Enter a number");
// //   console.log(g);
// //   console.log(typeof g);
// // }

// let temp;
// let temp1;

// console.log(typeof temp);
// console.log(typeof temp1);
// console.log(typeof (temp + temp1)); // --> Uncaught ReferenceError all three.

let btn1 = document.querySelector(".btn1");
console.log(btn1);

let btn2 = document.querySelector("#btn2");
console.log(btn2);

let h1 = document.querySelector("#hi");
console.log(h1);

let count = 0;

function doThis() {
  ++count;
  console.log(count);
  if (btn1.textContent === "Clicked") {
    btn1.textContent = "Click Me";
    h1.textContent = count;
    btn1.style.color = "white";
    btn1.style.backgroundColor = "black";
  } else {
    btn1.textContent = "Clicked";
    h1.textContent = count;
    btn1.style.color = "white";
    btn1.style.backgroundColor = "grey";
  }
  //   btn1.style.color = "red";
  //   btn1.style.backgroundColor = "green";
  //   if (g) {
  //     btn1.textContent = "Click Me";
  //   }
}

btn1.addEventListener("click", doThis); // --> Callback Function (passing the reference of the function)
// btn1.addEventListener("mouseover", doThis1);
// btn1.addEventListener("mouseout", doThis2);

// function doThis1() {
//   btn1.style.backgroundColor = "yellow";
// }
// function doThis2() {
//   btn1.style.backgroundColor = "grey";
// }
