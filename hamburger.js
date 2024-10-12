const menuBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const navOptions = document.querySelectorAll(".nav-options a");
const navOverlay = document.getElementById("mobile-nav-overlay");

menuBtn.addEventListener("click", () => {
  navOverlay.classList.toggle("hidden");
  navOverlay.classList.toggle("flex");
});
navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    navOverlay.classList.toggle("hidden");
    navOverlay.classList.toggle("flex");
  });
});
closeBtn.addEventListener("click", () => {
  navOverlay.classList.toggle("hidden");
  navOverlay.classList.toggle("flex");
});
