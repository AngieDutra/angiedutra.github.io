const setOverlayStyles = (overlay) => {
  overlay.classList.toggle("hidden");
  overlay.classList.toggle("flex");
};

// Prevent scrolling the web while the nav overlay is open
const toggleBodyScroll = () => {
  const body = document.querySelector("body");
  const isNavOpen = navOverlay.classList.contains("flex");
  if (isNavOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
};

// Get buttons
const menuButtons = document.querySelectorAll(".hamburger-btn");
const closeButtons = document.querySelectorAll(".close-btn");
// Get nav overlay
const navOverlay = document.getElementById("mobile-nav-overlay");
// Get nav options
const navOptions = document.querySelectorAll(".nav-options a");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setOverlayStyles(navOverlay);
    toggleBodyScroll();
  });
});
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setOverlayStyles(navOverlay);
    toggleBodyScroll();
  });
});
navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setOverlayStyles(navOverlay);
    toggleBodyScroll();
  });
});
