const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuButton2 = document.getElementById("mobile-menu-button2");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenu2 = document.getElementById("mobile-menu2");
const mainMenu = document.getElementById("mainMenu");
const mainMenu2 = document.getElementById("mainMenu2");




mobileMenuButton2.addEventListener("click", () => {
  mobileMenu2.classList.toggle("hidden");
});

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});




mainMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
mainMenu2.addEventListener("click", () => {
  mobileMenu2.classList.toggle("hidden");
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
document.getElementById("body").addEventListener("click", () => {
  mobileMenu2.classList.add("hidden");
});





 const scrollTopBtn = document.getElementById("scrollTopBtn");

 // Show button when user scrolls down 300px
 window.addEventListener("scroll", function () {
   if (window.scrollY > 300) {
     scrollTopBtn.style.display = "block";
   } else {
     scrollTopBtn.style.display = "none";
   }
 });

 // Scroll to Top when button is clicked
 scrollTopBtn.addEventListener("click", function () {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 });


//  <!-- JavaScript for Animation -->

    const mobileAppImage = document.getElementById('mobileAppImage');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mobileAppImage.classList.remove('opacity-0', '-translate-x-20');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('appSection'));
