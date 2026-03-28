const fs = require("node:fs");
const XLSX = require("xlsx");

const data = fs.readFileSync("data.json", "utf-8");

// console.log(data, typeof data);
// const updated = data.replaceAll("\n", "");
// const updated_new = updated.replaceAll("\n", "");
const objs = JSON.parse(data);

console.log(objs);
console.log(typeof objs);

// const objs = updated.split(",");
// console.log(objs);
const worksheet = XLSX.utils.json_to_sheet(objs);

const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

XLSX.writeFile(workbook, "users.xlsx");
