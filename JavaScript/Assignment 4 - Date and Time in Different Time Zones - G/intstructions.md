**How exactly do we go about doing this?**

**Objective:**

Create a web application that displays the current time in two time zones:

Local time (based on the user's system clock)

Selected time zone (from a dropdown menu)

Both times should update every second.

**Functional Requirements:**

1. **Local Time:**

Display the current local time in 12-hour format (e.g., 12:30:45 PM).

Show the date in a readable format (e.g., December 7, 2024).

Update every second.

2. **Selected Time Zone:**

Provide a dropdown to select a time zone (e.g., New York, London, Sydney).

Display the time and date for the selected time zone in 12-hour format.

Update every second.

3. **Dropdown Menu:**

Include at least 5 time zones in the dropdown.

Update the displayed time when a time zone is selected.

4. **Styling and Layout:**

Use Bootstrap for styling and layout.

The UI should be neat, modern, and responsive.

Time boxes should be compact and visually distinct.

5. **Real-Time Updates:Use JavaScript to update both times every second using setInterval().**

**Instructions:**

1. The UI should match as per the given reference image.
2. The heading should use the ID 'main-heading'.
3. The local time and local date elements should use the 'local-time' and local-date' ID's respectively.
4. The zone time and zone date elements should use the 'zone-time' and 'zone-date' ID's respectively.
5. The time zone select dropdown element should use the 'timezone-select' ID.
6. Use Bootstrap for styling and layout.

**HTML Structure**

wireframe:
container:
|
|-- heading(h1) with id "main-heading"
|
|-- div with local time (id = local-time) and date (id = local-date).
|
|-- div with other zone times(id = zone-time) and dates(id = zone-date) -- select dropdown element(id = timezone-select)

**BootStrap Styling (not CSS.)**
