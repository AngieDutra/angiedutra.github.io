const experienceDropdowns = document.querySelectorAll(".experience-project");
experienceDropdowns.forEach((dropdown) => {
  const dropdownText = dropdown.querySelector(".experience-drop-info");
  const plusIcon = dropdown.querySelector(".show");
  const minusIcon = dropdown.querySelector(".hide");
  dropdown.addEventListener("click", () => {
    dropdownText.classList.toggle("hidden");
    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
  });
});
