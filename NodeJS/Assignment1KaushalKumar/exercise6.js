const fs = require("fs");

const users = [
  { name: "Anand", age: 22, gender: 0, city: "Mumbai" },
  { name: "Bihu", age: 17, gender: 1, city: "Pune" },
];

const lines = users.map(
  (user) => `${user.name} | ${user.age} | ${user.gender} | ${user.city}`,
);

fs.writeFileSync("users-info.txt", lines.join("\n"));
