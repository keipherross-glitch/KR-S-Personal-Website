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