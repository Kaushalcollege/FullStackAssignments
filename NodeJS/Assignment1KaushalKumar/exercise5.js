const fs = require("node:fs");

const data = fs.readFileSync("data.txt", "utf-8");

console.log(data);
const lines = data.split("\n");
console.log(lines);

const json = lines.map((line) => {
  const [name, age, gender, city] = line.split("|").map((x) => x.trim());

  return {
    name,
    age: Number(age),
    gender: Number(gender),
    city,
  };
});

console.log(JSON.stringify(json, null, 2));
