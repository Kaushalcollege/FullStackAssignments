let express = require("express");
const fs = require("fs");
const path = require("path");

// const app = express();
// const port = 80;

// app.listen(port, () => {
//   console.log("Server running on :: ", port);
// });

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const filePath = path.join(__dirname + "/lib", "users.txt");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error reading file");
      }

      // Split lines and remove empty ones
      let lines = data.split("\n").filter((line) => line.trim() !== "");

      // Extract headers
      let headers = lines[0].split("|").map((h) => h.trim());

      // Start building HTML
      let html = `<html>
        <head>
          <title>Users Table</title>
          <style>
            table { border-collapse: collapse; width: 60%; margin: 20px auto; }
            th, td { border: 1px solid black; padding: 8px; text-align: center; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <table>
            <tr>`;

      // Add headers
      headers.forEach((h) => {
        html += `<th>${h}</th>`;
      });

      html += `</tr>`;

      // Add rows
      for (let i = 1; i < lines.length; i++) {
        let cols = lines[i].split("|").map((c) => c.trim());

        html += `<tr>`;
        cols.forEach((col) => {
          html += `<td>${col}</td>`;
        });
        html += `</tr>`;
      }

      html += `</table>
        </body>
      </html>`;

      res.status(200).send(html);
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
