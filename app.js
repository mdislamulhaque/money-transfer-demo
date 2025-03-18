const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mainMenu = document.getElementById("mainMenu");


mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mainMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
