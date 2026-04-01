let express = require("express");
const path = require("path");

// const app = express();
// const port = 80;
// const absolutePath = __dirname + "/views/index.html";
const router = express.Router();

// router.listen(port, "localhost", (err) => {
//   if (err) console.log(`Error in server start :: ${err}`);
//   else console.log("Server running on :: ", port);
// });

router.get("/home", (req, res) => {
  try {
    // res.status(200).json({
    //   status: "success",
    // });
    res.status(200).sendFile(path.join(__dirname + "/lib", "home.html"));
    return path.join(__dirname + "/lib", "home.html");
  } catch (e) {
    console.log(e);
  }
});

router.get("/contact", (req, res) => {
  try {
    // res.status(200).json({
    //   status: "success",
    // });
    res.status(200).sendFile(path.join(__dirname + "/lib", "contact.html"));
    return path.join(__dirname + "/lib", "contact.html");
  } catch (e) {
    console.log(e);
  }
});

router.get("/about", (req, res) => {
  try {
    // res.status(200).json({
    //   status: "success",
    // });
    res.status(200).sendFile(path.join(__dirname + "/lib", "about.html"));
    return path.join(__dirname + "/lib", "about.html");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
