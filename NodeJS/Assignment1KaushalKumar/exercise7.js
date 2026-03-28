const XLSX = require("xlsx");

const workbook = XLSX.readFile("marks.xlsx");

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const data = XLSX.utils.sheet_to_json(sheet);

console.log(data);
