const setIconsStyles = (icons) => {
  icons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
};
const experienceDropdowns = document.querySelectorAll(".experience-project");
experienceDropdowns.forEach((collapsible) => {
  const dropdownText = collapsible.querySelector(".experience-drop-info");
  const plusIcons = collapsible.querySelectorAll(".show");
  const minusIcons = collapsible.querySelectorAll(".hide");
  collapsible.addEventListener("click", () => {
    dropdownText.classList.toggle("hidden");
    setIconsStyles(plusIcons);
    setIconsStyles(minusIcons);
  });
});
