let getAllStudents = (request, response) => {
  response.status(200).json({
    // Method Chaining.
    status: "success",
    dataTime: Date.now() - request.startTime,
    data: "Got all Students.",
  });
};

let addNewStudent = (req, res) => {
  res.status(201);
  res.json({
    status: "success",
    data: "Added a new Student.",
  });
};

let getTOP10Students = (req, res) => {
  res.end("hi-t10");
};
let getLAST5 = (req, res) => {
  res.end("hi-l5");
};

module.exports = { getAllStudents, getTOP10Students, getLAST5, addNewStudent };
