const fs = require("node:fs");

const data = fs.readFileSync("debug.log", "utf-8");

console.log(data);
const lines = data.split("\n");
console.log(lines);

// const updated_lines = lines.map((line) => {
//   const timeStamp = new Date().toLocaleTimeString();
//   const date = new Date().toLocaleDateString();
//   return `${date} ${timeStamp} ${line}`;
// });

const updated_lines = lines.map((line) => {
  const now = new Date();

  const formattedDate = now
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replaceAll(" ", "-");
  const timeStamp = now.toLocaleTimeString();

  return `${formattedDate} ${timeStamp} ${line}`;
});

fs.writeFileSync("debug_updated.log", updated_lines.join("\n"));

console.log(fs.readFileSync("debug_updated.log", "utf-8"));
