function loadData() {
  var users = JSON.parse(localStorage.getItem("users"));

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

  // Now, let's render the table (the "amateur" way)
  var container = document.getElementById("tableContainer");

  // Start building an HTML string
  var htmlString = "";

  // Create Header Row string
  htmlString += '<div class="row header">';
  htmlString += '<span class="cell">Name</span>';
  htmlString += '<span class="cell">Occupation</span>';
  htmlString += '<span class="cell">Contact</span>';
  htmlString += '<span class="cell">Education</span>';
  htmlString += "</div>";

  // Create Data Row strings
  var keys = Object.keys(users);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var user = users[key];

    // Check for valid data
    if (
      user &&
      user.name &&
      user.occupation &&
      user.contact &&
      user.education
    ) {
      // Determine row class
      var rowClass = "row ";
      if (i % 2 === 0) {
        rowClass += "even";
      } else {
        rowClass += "odd";
      }

      // Add the row's HTML to the string
      htmlString += '<div class="' + rowClass + '">';
      htmlString += '<span class="cell">' + user.name + "</span>";
      htmlString += '<span class="cell">' + user.occupation + "</span>";
      htmlString += '<span class="cell">' + user.contact + "</span>";
      htmlString += '<span class="cell">' + user.education + "</span>";
      htmlString += "</div>";
    }
  }

  // Set the container's content all at once
  container.innerHTML = htmlString;
}
