const fs = require("node:fs");

let getFileContent = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

getFileContent("lib/index.html");
getFileContent("lib/readme.txt");
getFileContent("lib/students.csv");
