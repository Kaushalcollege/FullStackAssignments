// let express = require("express");
// const path = require("path");

// const app = express();
// const port = 80;
// // const absolutePath = __dirname + "/views/index.html";

// app.listen(port, "localhost", (err) => {
//   if (err) console.log(`Error in server start :: ${err}`);
//   else console.log("Server running on :: ", port);
// });

// app.use(express.static(path.join(__dirname, "public")));
const express = require("express");
const path = require("path");

const router = express.Router();

// Serve all static files from /public
router.use(express.static(path.join(__dirname, "../public")));

module.exports = router;
