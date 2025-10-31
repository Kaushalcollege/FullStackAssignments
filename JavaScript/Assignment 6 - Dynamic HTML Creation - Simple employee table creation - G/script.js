function loadData() {
  let users = JSON.parse(localStorage.getItem("users"));

  // If not in localStorage, create and store it
  if (!users) {
    users = {
      "james@gmail.com": {
        name: "James Yates",
        occupation: "Web Designer",
        contact: "+63 983 0962 971",
        education: "NY University",
      },
      "matthew@gmail.com": {
        name: "Matthew Wasil",
        occupation: "Graphic Designer",
        contact: "+02 020 3994 929",
        education: "London College",
      },
      "sampson@gmail.com": {
        name: "Sampson Murphy",
        occupation: "Mobile Dev",
        contact: "+01 352 1125 0192",
        education: "Senior High",
      },
      "gaspar@gmail.com": {
        name: "Gaspar Semenov",
        occupation: "Illustrator",
        contact: "+92 020 3994 929",
        education: "College",
      },
      "ravi@gmail.com": {
        name: "Ravi Kumar",
        occupation: "Software Engineer",
        contact: "+91 9988776655",
        education: "IIT Delhi",
      },
      "aisha@gmail.com": {
        name: "Aisha Khan",
        occupation: "UI/UX Designer",
        contact: "+44 7700 900123",
        education: "Oxford University",
      },
      "nina@gmail.com": {
        name: "Nina Thomas",
        occupation: "Project Manager",
        contact: "+49 151 2345678",
        education: "Berlin Tech",
      },
      "rohan@gmail.com": {
        name: "Rohan Das",
        occupation: "DevOps Engineer",
        contact: "+91 9876543210",
        education: "BITS Pilani",
      },
      "laura@gmail.com": {
        name: "Laura Smith",
        occupation: "QA Analyst",
        contact: "+1 202 555 0183",
        education: "Harvard University",
      },
      "kevin@gmail.com": {
        name: "Kevin White",
        occupation: "Cloud Architect",
        contact: "+1 303 555 0110",
        education: "Stanford University",
      },
    };
    localStorage.setItem("users", JSON.stringify(users));
  }

  renderTable(users);
}

function renderTable(users) {
  const container = document.getElementById("tableContainer");
  container.innerHTML = ""; // clear previous content

  // Create Header Row
  const header = document.createElement("div");
  header.className = "row header";
  const headers = ["Name", "Occupation", "Contact", "Education"];
  headers.forEach((h) => {
    const span = document.createElement("span");
    span.className = "cell";
    span.textContent = h;
    header.appendChild(span);
  });
  container.appendChild(header);

  // Create Data Rows
  const keys = Object.keys(users);
  keys.forEach((key, index) => {
    const user = users[key];
    if (
      user &&
      user.name &&
      user.occupation &&
      user.contact &&
      user.education
    ) {
      const row = document.createElement("div");
      row.className = "row " + (index % 2 === 0 ? "even" : "odd");

      const values = [user.name, user.occupation, user.contact, user.education];
      values.forEach((v) => {
        const span = document.createElement("span");
        span.className = "cell";
        span.textContent = v;
        row.appendChild(span);
      });

      container.appendChild(row);
    }
  });
}
