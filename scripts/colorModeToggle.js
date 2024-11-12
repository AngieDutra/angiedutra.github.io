// Tailwind config to enable dark mode through class
tailwind.config = {
  darkMode: "class",
};

// Cached DOM element
const rootElement = document.documentElement;

// Initialize theme based on saved preference or system setting
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set theme: use saved theme if available, otherwise system preference
  const isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
  rootElement.classList.toggle("dark", isDarkMode);
}

initTheme();

// Update theme on system change if no user preference is set
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      rootElement.classList.toggle("dark", e.matches);
    }
  });

// Toggle theme and save user preference
function toggleTheme() {
  const isDarkMode = rootElement.classList.toggle("dark");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Set up theme toggle button
const toggleBtns = document.querySelectorAll(".mode-toggle");
toggleBtns.forEach((button) => {
  button.addEventListener("click", toggleTheme);
});
