const menuBtns = document.querySelectorAll(".hamburger-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const navOptions = document.querySelectorAll(".nav-options a");
const navOverlay = document.getElementById("mobile-nav-overlay");

menuBtns.forEach((button) => {
  button.addEventListener("click", () => {
    navOverlay.classList.toggle("hidden");
    navOverlay.classList.toggle("flex");
  });
});
closeBtns.forEach((button) => {
  button.addEventListener("click", () => {
    navOverlay.classList.toggle("hidden");
    navOverlay.classList.toggle("flex");
  });
});
navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    navOverlay.classList.toggle("hidden");
    navOverlay.classList.toggle("flex");
  });
});
