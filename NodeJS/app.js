let express = require("express");

// let sC = require("./controllers/studentController");
const app = express();
app.use(express.json());

let studentRouter = require("./routes/studentRoute");

app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    data: "Home Page.",
  });
});

let studentLoad = () => {
  app.use((request, response, next) => {
    request.startTime = Date.now();
    setTimeout(() => {
      next();
    }, 2000);
  });

  app.use((request, response, next) => {
    setTimeout(() => {
      next();
    }, 2000);
  });
  app.use((request, response, next) => {
    setTimeout(() => {
      next();
    }, 2000);
  });
};

app.use("/student", studentRouter);
app.use(
  "/faculty",
  (req, res, next) => {
    setTimeout(() => {
      next();
    }, 2000);
  },
  studentRouter,
);

module.exports = app;
