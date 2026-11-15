// ===== script.js: JavaScript features for Keipher Ross's personal website =====
// Each feature lives in its own function and checks that its element exists first,
// so this one file can be loaded safely on every page.

console.log("script.js loaded");
// ===== FEATURE 1: Welcome message based on the visitor's local time =====
function setWelcomeMessage() {
    // Find the greeting on the page (it only exists on index.html)
    const welcomeElement = document.getElementById("welcome-message");
    if (!welcomeElement) return; // stop quietly on pages without the greeting

    // Get the current hour (0-23) from the visitor's system clock
    const currentHour = new Date().getHours();

  
    // Choose a greeting for the time of day
    let greeting;
    if (currentHour < 12) {
        greeting = "Morning! Let’s negotiate: I’ll open my eyes if you hide the sun";
    } else if (currentHour < 18) {
        greeting = "Afternoon alert";
    } else {
        greeting = "Bonne nuit";
    }

      // Replace the text on the page
    welcomeElement.textContent = greeting + ", It's Me";
}
// Run the function when the page loads
setWelcomeMessage();

// ===== FEATURE 2: Live digital clock and date =====
function startClock() {
    // Find the clock line in the footer
    const clockElement = document.getElementById("live-clock");
    if (!clockElement) return; // stop quietly if the page has no clock

// Read the current date and time, then show them on the page
    function updateClock() {
        const now = new Date();
        const dateText = now.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const timeText = now.toLocaleTimeString();
        clockElement.textContent = dateText + " | " + timeText;
    }

     updateClock();                   // show the time straight away
    setInterval(updateClock, 1000);  // then refresh it every 1000 ms (1 second)
}
// Start the clock when the page loads
startClock();

// ===== FEATURE 3: Dark / light mode toggle =====
function setupThemeToggle() {
    // Find the toggle button in the navigation bar
    const toggleButton = document.getElementById("theme-toggle");
    if (!toggleButton) return;

 // Apply a theme: add or remove the light-mode class and update the button text
    function applyTheme(theme) {
        const isLight = theme === "light";
        document.body.classList.toggle("light-mode", isLight);
        toggleButton.textContent = isLight ? "Dark mode" : "Light mode";
    }

// Restore the visitor's last choice (dark is the default)
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

// When the button is clicked, switch to the other theme and remember it
    toggleButton.addEventListener("click", function () {
        const newTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

// Set up the toggle when the page loads
setupThemeToggle()

// ===== FEATURE 4: Character counter for the contact message box =====
function setupCharacterCounter() {
    // Find the message box and the line that shows the count
    const messageBox = document.getElementById("message");
    const counterElement = document.getElementById("char-count");
    if (!messageBox || !counterElement) return; // only runs on the contact page

// Read the limit from the textarea's maxlength attribute
    const maxCharacters = messageBox.maxLength;

// Count what has been typed so far and show it
    function updateCounter() {
        const typedCharacters = messageBox.value.length;
        counterElement.textContent = typedCharacters + " / " + maxCharacters + " characters";

// Warn the visitor when they are within 50 characters of the limit
        const remaining = maxCharacters - typedCharacters;
        counterElement.classList.toggle("near-limit", remaining <= 50);
    }

        // Update the count every time the visitor types, pastes or deletes
    messageBox.addEventListener("input", updateCounter);
    updateCounter(); // show the starting count
}
// Set up the counter when the page loads
setupCharacterCounter();

// ===== FEATURE 5: Add a skill row to the skills table =====
function setupSkillForm() {
    // Find the form, the table body and the message line
    const skillForm = document.getElementById("skill-form");
    const skillsBody = document.getElementById("skills-body");
    const messageElement = document.getElementById("skill-message");
    if (!skillForm || !skillsBody) return; // only runs on the home page

// Run when the visitor clicks "Add Skill" or presses Enter
    skillForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stop the page from reloading

// Get the values the visitor entered
        const nameInput = document.getElementById("skill-name");
        const levelSelect = document.getElementById("skill-level");
        const skillName = nameInput.value.trim();
        const skillLevel = levelSelect.value;

 // Check the input before adding anything
        if (skillName === "") {
            messageElement.textContent = "Please enter a skill name.";
            return;
        }

// Stop duplicates: compare with every skill already in the table
        const alreadyListed = Array.from(skillsBody.rows).some(function (row) {
            return row.cells[0].textContent.toLowerCase() === skillName.toLowerCase();
            });
        if (alreadyListed) {
            messageElement.textContent = skillName + " is already in the table.";
            return;
        }

// Build a new row: <tr><td>skill</td><td>level</td></tr>
        const newRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const levelCell = document.createElement("td");
        nameCell.textContent = skillName;
        levelCell.textContent = skillLevel;
        newRow.appendChild(nameCell);
        newRow.appendChild(levelCell);
        
// Add the row to the table
        skillsBody.appendChild(newRow);

// Confirm to the visitor, clear the form and return to the text box
        messageElement.textContent = skillName + " added to the table.";
        skillForm.reset();
        nameInput.focus();
    });
}
// Set up the form when the page loads
setupSkillForm();