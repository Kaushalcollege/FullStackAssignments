const fs = require("fs");

function random(length) {
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let word = "";

  for (let i = 0; i < length; i++) {
    word += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return word;
}

let words = [];

for (let i = 0; i < 100; i++) {
  words.push(random(10));
}

fs.writeFileSync("random-words.txt", words.join("\n"));
