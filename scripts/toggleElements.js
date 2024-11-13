const experienceDropdowns = document.querySelectorAll(".experience-project");
experienceDropdowns.forEach((dropdown) => {
  const dropdownText = dropdown.querySelector(".experience-drop-info");
  const plusIcons = dropdown.querySelectorAll(".show");
  const minusIcons = dropdown.querySelectorAll(".hide");
  dropdown.addEventListener("click", () => {
    dropdownText.classList.toggle("hidden");
    plusIcons.forEach((icon) => {
      icon.classList.toggle("hidden");
    });
    minusIcons.forEach((icon) => {
      icon.classList.toggle("hidden");
    });
  });
});
