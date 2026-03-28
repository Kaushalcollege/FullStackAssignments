let pool = require("./../db");
let bcrypt = require("bcrypt");

let addNewStudent = async (req, res) => {
  console.log(req.body);
  let em = req.body.email;
  let pass = req.body.p_word;

  let hashpass = await bcrypt.hash(pass, 10);

  let ins = await pool.query(`insert into users (email, p_word) values (?,?)`, [
    em,
    hashpass,
  ]);
  console.log(ins);

  res.status(201);
  res.json({
    status: "success",
    data: ins,
  });
};

let getTOP10Students = (req, res) => {
  res.end("hi-t10");
};
let getLAST5 = (req, res) => {
  res.end("hi-l5");
};

let getStudents = async (req, res) => {
  let k = req.query.val;

  console.log(k);
  let ans = await pool.query(`show ${k}`);
  ans = ans[0];
  // console.log(req);

  // "show "databases""

  res.status(200).json({
    status: "success",
    data: ans,
    param: req.query,
  });
};

let login = async (request, response) => {
  console.log(request.body);
  let email = request.body.email;
  let pass = request.body.p_word;

  let [row] = await pool.query("select * from users where email = ?", [email]);

  if (row.length == 0) {
    return response.status(404).json({
      status: "fail",
      message: "no user found.",
    });
  }

  let user = row[0];

  let match = await bcrypt.compare(pass, user.p_word);
  if (!match) {
    return response.status(404).json({
      status: "fail",
      message: "invalid pass.",
    });
  }

  return response.json({ data: match });
};

module.exports = {
  getStudents,
  getTOP10Students,
  getLAST5,
  addNewStudent,
  login,
};
