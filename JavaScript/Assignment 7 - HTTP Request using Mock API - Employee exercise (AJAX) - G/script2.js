"use strict";

/*
    Wireframe:
        |
        |-- Container:
                |
                |-- header that says = MOCK API along with the "Add User Button" emoji. The Add User button should use the class name 'addButton'.
                        |
                        |-- The popup form to add a new user must use the class name 'addUserForm'.
                        |
                        |-- Inside the Add User Form:
                                |
                                |-- The Name field should have the ID 'name'.
                                |-- The Rating field should have the ID 'rating'.
                                |-- The Comment field should have the ID 'comment'.
                        |
                        |-- The Save button inside the form should use the class name 'saveButton'.
                        |
                        |-- The Close button inside the form should use the class name 'closeButton'.

                |-- View / Read : The data should be displayed in a tabular format.
                |
                |-- Delete : By clicking on the delete icon, a confirmation popup should come up and delete the row if the user agrees.
                        |
                        |-- The Delete confirmation popup should use the class name 'confirm-box'.
                                |
                                |-- Inside the confirmation popup:
                                        |
                                        |-- The Delete button should have the ID 'delete'.
                                        |-- The Cancel button should have the ID 'cancel'.
                |
                |-- Edit / Update :
                        |
                        |--  Each row of data should include an edit and delete icon positioned at the right end as given in the UI design. By clicking on the edit button, that particular row in the table must be editable directly.
                        |
                        |-- When we click on the enter key in the keyboard the data must be saved in the table.
                                |
                                |-- The Edit button in the Action column should use the class name 'editButton'.
                                |-- The name field should use the 'editedName' ID.
                                |-- The rating field should use the 'editedRating' ID.
                                |-- The comment field should use the 'editedComment' ID.
*/

const addButton = document.querySelector(".addButton");
console.log(addButton);
const saveButton = document.querySelector(".saveButton");
console.log(saveButton);
const closeButton = document.querySelector(".closeButton");
console.log(closeButton);
const addUserForm = document.getElementById("addUserForm");
console.log(addUserForm);
const confirmBox = document.getElementById("confirm-box");
console.log(confirmBox);
const deleteBtn = document.getElementById("delete");
const cancelBtn = document.getElementById("cancel");

const URL = "https://69041b42d0f10a340b26b8da.mockapi.io/api/kaushal/feedback";

addButton.addEventListener("click", () => {
  // show the add user popup
  addUserForm.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  // close the add user popup
  addUserForm.classList.add("hidden");
});

const feedbackList = document.getElementById("feedbackList");

async function feedback() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        try {
          const data = JSON.parse(this.responseText);
          displayFeedback(data);
        } catch (err) {
          console.error("Error parsing response:", err);
        }
      } else {
        console.error("Error: Failed to fetch feedback data");
      }
    }
  };
  http.open("GET", URL, true);
  http.send();
}

function displayFeedback(data) {
  const tableBody = document.querySelector("#feedbackTable tbody");

  tableBody.innerHTML = data
    .map(
      (item) => `
        <tr data-id="${item.id}">
          <td>${item.name}</td>
          <td>${item.rating}</td>
          <td>${item.comment}</td>
          <td>
            <button class="editButton"> Edit </button>
            <button class="deleteButton"> Delete </button>
          </td>
        </tr>
      `
    )
    .join("");

  addActionListeners();
}

let selectedId = null;

function addActionListeners() {
  document.querySelectorAll(".deleteButton").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      selectedId = row.getAttribute("data-id");

      confirmBox.classList.remove("hidden");
    });
  });

  document.querySelectorAll(".editButton").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      handleEdit(e.target);
    });
  });
}

deleteBtn.addEventListener("click", () => {
  if (selectedId) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (this.readyState == 4) {
        confirmBox.classList.add("hidden");
        if (this.status == 200) {
          selectedId = null;
          feedback();
        } else {
          console.error("Error deleting feedback:", this.status);
          selectedId = null;
        }
      }
    };
    http.open("DELETE", `${URL}/${selectedId}`, true);
    http.send();
  }
});

cancelBtn.addEventListener("click", () => {
  confirmBox.classList.add("hidden");
  selectedId = null;
});

feedback();

saveButton.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const rating = document.getElementById("rating").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (!name || !rating || !comment) {
    alert("Please fill all fields before saving!");
    return;
  }

  const newFeedback = { name, rating, comment };

  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 201) {
        addUserForm.classList.add("hidden");
        document.getElementById("name").value = "";
        document.getElementById("rating").value = "";
        document.getElementById("comment").value = "";

        feedback();
      } else {
        console.error("Error adding feedback:", this.status);
      }
    }
  };

  http.open("POST", URL, true);
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(newFeedback));
});

function revertOtherEdits(currentRow) {
  const otherEditInput = document.getElementById("editedName");
  if (otherEditInput) {
    const otherRow = otherEditInput.closest("tr");
    if (otherRow && otherRow !== currentRow) {
      otherRow.cells[0].textContent =
        otherRow.querySelector("#editedName").value;
      otherRow.cells[1].textContent =
        otherRow.querySelector("#editedRating").value;
      otherRow.cells[2].textContent =
        otherRow.querySelector("#editedComment").value;
      otherRow.removeEventListener("keydown", handleEditKeydown);
    }
  }
}

function handleEdit(editButton) {
  const row = editButton.closest("tr");

  if (row.querySelector("input")) {
    return;
  }
  revertOtherEdits(row);

  const nameCell = row.cells[0];
  const ratingCell = row.cells[1];
  const commentCell = row.cells[2];

  const name = nameCell.textContent;
  const rating = ratingCell.textContent;
  const comment = commentCell.textContent;

  nameCell.innerHTML = `<input type="text" id="editedName" value="${name}">`;
  ratingCell.innerHTML = `<input type="number" id="editedRating" value="${rating}">`;
  commentCell.innerHTML = `<input type="text" id="editedComment" value="${comment}">`;

  nameCell.querySelector("input").focus();

  row.addEventListener("keydown", handleEditKeydown);
}

function handleEditKeydown(event) {
  if (event.key === "Enter") {
    const row = event.currentTarget;
    const id = row.getAttribute("data-id");

    const newName = document.getElementById("editedName").value;
    const newRating = document.getElementById("editedRating").value;
    const newComment = document.getElementById("editedComment").value;

    const updatedData = {
      name: newName,
      rating: newRating,
      comment: newComment,
    };

    row.removeEventListener("keydown", handleEditKeydown);

    updateFeedback(id, updatedData);
  }
}

function updateFeedback(id, data) {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        feedback();
      } else {
        console.error("Error updating feedback:", this.status);
        feedback();
      }
    }
  };
  http.open("PUT", `${URL}/${id}`, true);
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(data));
}
