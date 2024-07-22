// main.js

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight) {
    navbar.classList.remove("transparent");
    navbar.classList.add("solid");
  } else {
    navbar.classList.remove("solid");
    navbar.classList.add("transparent");
  }
});

// Initial call to set the correct class based on the initial scroll position
window.addEventListener("load", function () {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight) {
    navbar.classList.remove("transparent");
    navbar.classList.add("solid");
  } else {
    navbar.classList.remove("solid");
    navbar.classList.add("transparent");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",

  autoplay: {
    delay: 2500,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
