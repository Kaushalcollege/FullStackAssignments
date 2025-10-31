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
                    |--  Each row of data should include an edit and delete icon positioned at the right end as given in the UI design. By clicking on the edit button, that particular row in the table must be editable directly.
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
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("Failed to fetch feedback data");

    const data = await response.json();
    displayFeedback(data);
  } catch (err) {
    console.error("Error:", err);
  }
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

let selectedId = null; // store which row we want to delete

function addActionListeners() {
  // Attach Delete Button event
  document.querySelectorAll(".deleteButton").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      selectedId = row.getAttribute("data-id");

      // show the confirmation box
      confirmBox.classList.remove("hidden");
    });
  });
}

// Handle Delete Confirmation
deleteBtn.addEventListener("click", async () => {
  if (selectedId) {
    await fetch(`${URL}/${selectedId}`, {
      method: "DELETE",
    });
    confirmBox.classList.add("hidden");
    selectedId = null;
    feedback(); // refresh table
  }
});

// Handle Cancel Button
cancelBtn.addEventListener("click", () => {
  confirmBox.classList.add("hidden");
  selectedId = null;
});

feedback();

saveButton.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const rating = document.getElementById("rating").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (!name || !rating || !comment) {
    alert("Please fill all fields before saving!");
    return;
  }

  // POST new feedback to API
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, rating, comment }),
  });

  // Close the popup and refresh the list
  addUserForm.classList.add("hidden");
  document.getElementById("name").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("comment").value = "";

  feedback(); // Refresh table data
});
