let express = require("express");
const path = require("path");

const app = express();
const port = 80;

const ex1 = require("./exercise1.js");
const ex2 = require("./exercise2.js");
const ex3 = require("./exercise3.js");
const ex4 = require("./exercise4.js");

app.use("/api/exercise1", ex1);
app.use("/api/exercise2", ex2);
app.use("/api/exercise3/pages", ex3);
app.use("/", ex4);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server running on :: ", port);
});
