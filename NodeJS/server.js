let app = require("./app.js");

app.listen(3000, "localhost", (err) => {
  if (err) {
    console.log(err.message);
  } else console.log("run");
});
