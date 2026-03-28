let express = require("express");
let router = express.Router();
let studentController = require("./../controllers/studentController");

router.post("/all", studentController.getStudents);
router.post("/new", studentController.addNewStudent);
router.post("/login", studentController.login);
router.get("/t10", studentController.getTOP10Students);
router.get("/l5", studentController.getLAST5);
router.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    otherRoutes: {
      "/all": "All Students.",
      "/new": "Add a new Student.",
      "/t10": "Tope 10 Students.",
      "/l5": "Last 5 Students.",
    },
  });
});

module.exports = router;
