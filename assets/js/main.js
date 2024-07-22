// main.js
window.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero") || document.body;
  const pageHeader = document.getElementById("page-header") || document.body;

  function updateNavbar() {
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const pageHeaderHeight = pageHeader.offsetHeight;

    if (scrollPosition > Math.min(heroHeight, pageHeaderHeight)) {
      navbar.classList.remove("transparent");
      navbar.classList.add("solid");
    } else {
      navbar.classList.remove("solid");
      navbar.classList.add("transparent");
    }
  }

  // Initial call
  updateNavbar();

  // Scroll event listener
  window.addEventListener("scroll", updateNavbar);
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

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle("active");
    });
  });

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.innerHTML = navMenu.classList.contains("active")
      ? '<i class="ph ph-x"></i>'
      : '<i class="ph ph-list"></i>';
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });
});
