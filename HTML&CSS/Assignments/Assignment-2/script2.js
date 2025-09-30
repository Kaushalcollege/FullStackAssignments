const open = document.getElementById("openBtn");
const popup = document.getElementById("popup");
const save = document.getElementById("saveBtn");
const closes = document.getElementById("closeBtn");
const close = document.getElementById("closeIcon");

//We add the functionality to the "Open Popup" button.
function openPopup() {
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
}

open.addEventListener("click", openPopup);
closes.addEventListener("click", closePopup);
close.addEventListener("click", closePopup);
save.addEventListener("click", closePopup);
