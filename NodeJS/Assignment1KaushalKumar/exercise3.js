const fs = require("node:fs"); // This is the file System module.

const copyFileContent = (filePath, fileCopyPath) => {
  fs.copyFile(filePath, fileCopyPath, (err) => {
    if (err) {
      console.log("Error Found:", err);
    } else console.log("File Copied!!");
  });
};

copyFileContent("lib/readme.txt", "readme-copy.txt");
