const menuBtns = document.querySelectorAll(".hamburger-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const navOptions = document.querySelectorAll(".nav-options a");
const navOverlay = document.getElementById("mobile-nav-overlay");

menuBtns.forEach((button) => {
  button.addEventListener("click", () => {
    navOverlay.classList.toggle("hidden");
    navOverlay.classList.toggle("flex");
    toggleScrollOnNav();
  });
});
closeBtns.forEach((button) => {
  button.addEventListener("click", () => {
    navOverlay.classList.toggle("hidden");
    navOverlay.classList.toggle("flex");
    toggleScrollOnNav();
  });
});
navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    navOverlay.classList.toggle("hidden");
    navOverlay.classList.toggle("flex");
    toggleScrollOnNav();
  });
});

function toggleScrollOnNav() {
  const body = document.querySelector("body");
  const isNavOpen = navOverlay.classList.contains("flex");
  if (isNavOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
}
