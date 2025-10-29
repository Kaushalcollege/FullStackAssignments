"use strict";

const tzSelect = document.getElementById("timezone-select");
const localTime = document.getElementById("local-time");
const localDate = document.getElementById("local-date");
const zoneTime = document.getElementById("zone-time");
const zoneDate = document.getElementById("zone-date");

// Format time in 12-hour format for a given time zone
function formatTime(date, timeZone) {
  // Pass the timeZone option directly to toLocaleTimeString
  return date.toLocaleTimeString("en-US", { hour12: true, timeZone: timeZone });
}

// Format date in readable format for a given time zone
function formatDate(date, timeZone) {
  // Pass the timeZone option directly to toLocaleDateString
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: timeZone,
  });
}

function updateTime() {
  const now = new Date();
  const selectedZone = tzSelect.value;

  // Local time (using 'undefined' or system default time zone)
  localTime.textContent = formatTime(now, undefined);
  localDate.textContent = formatDate(now, undefined);

  // Selected zone time (using the selected time zone)
  zoneTime.textContent = formatTime(now, selectedZone);
  zoneDate.textContent = formatDate(now, selectedZone);
}

// Update every second
setInterval(updateTime, 1000);

// Update immediately on selection change
tzSelect.addEventListener("change", updateTime);

// Initial call
updateTime();
