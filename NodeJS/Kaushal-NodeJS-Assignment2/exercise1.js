let express = require("express");
const path = require("path");

// const app = express();
// const port = 80;
// // const absolutePath = __dirname + "/views/index.html";

// app.listen(port, "localhost", (err) => {
//   if (err) console.log(`Error in server start :: ${err}`);
//   else console.log("Server running on :: ", port);
// });
const router = express.Router();

router.get("/", (req, res) => {
  try {
    // res.status(200).json({
    //   status: "success",
    // });
    res.status(200).sendFile(path.join(__dirname + "/lib", "index.html"));
    return path.join(__dirname + "/lib", "index.html");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
