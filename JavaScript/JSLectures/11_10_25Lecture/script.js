"use strict";

let hehe = document.querySelector(".ele");

let eleChilds = hehe.childNodes;
console.log(eleChilds);
// NodeList(7) [text, div.a, text, div.b, text, div.c, text]

// eleChilds.forEach((ele, ind, arr) => {
//   ele.style.color = "red";
// });
// The above code will throw an error because text nodes do not have a style property.

// To avoid the error, we can check if the node is an element node before applying styles.
// We can use the nodeType property to check if the node is an element node (nodeType === 1).

// nodeType values:
// 1 - Element
// 3 - Text Node
// 8 - Comment Node

// Applying styles only to element nodes
// Using forEach on NodeList is not supported in all browsers, so we can convert it to an array first.

eleChilds.forEach((ele, arr) => {
  if (ele.nodeName !== "#text") ele.style.color = "red";
  //OR
  if (ele.nodeType === 1) ele.style.color = "green";
});

// In the for-each loop, we pass a callback function that takes three arguments: the current element (ele), the index of the current element (ind), and the array being traversed (arr). In this case, we only need the current element, so we can ignore the other two arguments.

eleChilds;
