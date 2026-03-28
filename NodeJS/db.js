let mysql = require("mysql2");

let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Prince@2709",
  database: "stu",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
