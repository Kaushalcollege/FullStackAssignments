// --- Validation Functions with Correct Regex ---

function firstNameCheck() {
  let value = document.getElementById("firstName").value;
  let errorEl = document.getElementById("firstNameError");
  // Regex: Must be only letters, from start (^) to end ($).
  let regex = /^[A-Za-z]+$/;
  if (value === "" || !regex.test(value)) {
    errorEl.innerHTML = "Invalid Input";
    return false;
  } else {
    errorEl.innerHTML = "";
    return true;
  }
}

function lastNameCheck() {
  let value = document.getElementById("lastName").value;
  let errorEl = document.getElementById("lastNameError");
  // Regex: Must be only letters, from start (^) to end ($).
  let regex = /^[A-Za-z]+$/;
  if (value === "" || !regex.test(value)) {
    errorEl.innerHTML = "Invalid Input";
    return false;
  } else {
    errorEl.innerHTML = "";
    return true;
  }
}

function emailCheck() {
  let value = document.getElementById("email").value;
  let errorEl = document.getElementById("emailError");
  // A more robust email regex
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (value === "" || !regex.test(value)) {
    errorEl.innerHTML = "Invalid Input";
    return false;
  } else {
    errorEl.innerHTML = "";
    return true;
  }
}

function phoneNumberCheck() {
  let value = document.getElementById("phoneNumber").value;
  let errorEl = document.getElementById("phoneNumberError");
  // Regex: Must be exactly 10 digits, from start (^) to end ($).
  let regex = /^\d{10}$/;
  if (value === "" || !regex.test(value)) {
    errorEl.innerHTML = "Invalid Input";
    return false;
  } else {
    errorEl.innerHTML = "";
    return true;
  }
}

function positionCheck() {
  let value = document.getElementById("position").value;
  let errorEl = document.getElementById("positionError");
  // Regex: Allows letters and spaces.
  let regex = /^[A-Za-z\s]+$/;
  if (value === "" || !regex.test(value)) {
    errorEl.innerHTML = "Invalid Input";
    return false;
  } else {
    errorEl.innerHTML = "";
    return true;
  }
}

// --- Main Form Logic ---

// Validate All Required Fields
function validateForm() {
  // By running all checks, all error messages will appear at once.
  const isFirstNameValid = firstNameCheck();
  const isLastNameValid = lastNameCheck();
  const isEmailValid = emailCheck();
  const isPhoneValid = phoneNumberCheck();
  const isPositionValid = positionCheck();

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPositionValid
  );
}

// Save all inputs to localStorage
function saveToLocalStorage() {
  // Text inputs
  localStorage.setItem("firstName", document.getElementById("firstName").value);
  localStorage.setItem("lastName", document.getElementById("lastName").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem(
    "phoneNumber",
    document.getElementById("phoneNumber").value
  );
  localStorage.setItem("position", document.getElementById("position").value);
  localStorage.setItem("startDate", document.getElementById("startDate").value);
  localStorage.setItem(
    "interviewDate",
    document.getElementById("interviewDate").value
  );

  // Dropdown
  localStorage.setItem("city", document.getElementById("city").value);

  // Radio buttons
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  if (selectedGender) {
    localStorage.setItem("gender", selectedGender.value);
  }

  // File input (save the file name)
  const resumeFile = document.getElementById("resume-upload").files[0];
  if (resumeFile) {
    localStorage.setItem("resumeName", resumeFile.name);
  }
}

// Load all inputs from localStorage when page reloads
function loadFromLocalStorage() {
  // Text inputs
  document.getElementById("firstName").value =
    localStorage.getItem("firstName") || "";
  document.getElementById("lastName").value =
    localStorage.getItem("lastName") || "";
  document.getElementById("email").value = localStorage.getItem("email") || "";
  document.getElementById("phoneNumber").value =
    localStorage.getItem("phoneNumber") || "";
  document.getElementById("position").value =
    localStorage.getItem("position") || "";
  document.getElementById("startDate").value =
    localStorage.getItem("startDate") || "";
  document.getElementById("interviewDate").value =
    localStorage.getItem("interviewDate") || "";

  // Dropdown
  document.getElementById("city").value =
    localStorage.getItem("city") || "Please Select";

  // Radio buttons
  const savedGender = localStorage.getItem("gender");
  if (savedGender) {
    document.querySelector(
      `input[name="gender"][value="${savedGender}"]`
    ).checked = true;
  }

  // File input name
  const savedResumeName = localStorage.getItem("resumeName");
  if (savedResumeName) {
    document.getElementById(
      "resumeName"
    ).textContent = `File selected: ${savedResumeName}`;
    document.getElementById("resumeName").style.display = "block";
  }
}

// --- Event Listeners ---

// Apply Button Click
document.getElementById("btn").addEventListener("click", function () {
  if (validateForm()) {
    saveToLocalStorage();

    // Show modal popup (using correct case-sensitive IDs)
    const modal = document.getElementById("okOverlay");
    const closeBtn = document.getElementById("closeOk");

    modal.style.display = "flex"; // Use flex for centering

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }
});

// Show selected filename for the resume upload
document
  .getElementById("resume-upload")
  .addEventListener("change", function () {
    const resumeNameDiv = document.getElementById("resumeName");
    if (this.files && this.files.length > 0) {
      resumeNameDiv.textContent = `File selected: ${this.files[0].name}`;
      resumeNameDiv.style.display = "block";
    } else {
      resumeNameDiv.style.display = "none";
    }
  });

// Load values on page load
window.onload = loadFromLocalStorage;
