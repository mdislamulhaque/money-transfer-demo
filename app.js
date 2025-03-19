const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mainMenu = document.getElementById("mainMenu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mainMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function toggleFAQ(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  answer.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}

let lastScrollY = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("visible-nav");
    navbar.classList.remove("hidden-nav");
  } else {
    navbar.classList.add("hidden-nav");
    navbar.classList.remove("visible-nav");
  }
});

window.addEventListener("scroll", () => {
  document.getElementById("navber-2").classList.add("hidden");
  const navbar = document.getElementById("navbar");
  if (navbar.classList.contains("hidden-nav")) {
    document.getElementById("navber-2").classList.remove("hidden");
  }
});

document.getElementById("body").addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
