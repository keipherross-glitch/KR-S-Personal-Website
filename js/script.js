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