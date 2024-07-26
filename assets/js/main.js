document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero") || document.body;
  const pageHeader = document.getElementById("page-header") || document.body;

  function updateNavbar() {
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const pageHeaderHeight = pageHeader.offsetHeight;

    if (scrollPosition > Math.min(heroHeight, pageHeaderHeight)-750) {
      navbar.classList.remove("transparent");
      navbar.classList.add("solid");
    } else {
      navbar.classList.remove("solid");
      navbar.classList.add("transparent");
    }
  }

  updateNavbar();

  window.addEventListener("scroll", updateNavbar);

  const hamburger = document.querySelector(".hamburger");
  const hamburgerIcon = hamburger.querySelector(".ph-list");
  const closeIcon = hamburger.querySelector(".ph-x");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".nav-menu > li > a");
  const subDropdowns = document.querySelectorAll(".nav-menu ul li > a");

  // Toggle mobile menu and icons
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburgerIcon.style.display = navMenu.classList.contains("active")
      ? "none"
      : "block";
    closeIcon.style.display = navMenu.classList.contains("active")
      ? "block"
      : "none";
  });

  // Handle main dropdowns on click
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      const parentLi = this.parentElement;
      if (parentLi.querySelector("ul")) {
        e.preventDefault();
        parentLi.classList.toggle("active");
      }
    });
  });

  // Handle sub-dropdowns on click
  subDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      const parentLi = this.parentElement;
      if (parentLi.querySelector("ul")) {
        e.preventDefault();
        parentLi.classList.toggle("active");
      }
    });
  });

  // Allow navigation for links within dropdowns
  const dropdownLinks = document.querySelectorAll(".nav-menu ul a");
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the dropdown toggle
      // The default link behavior (navigation) will occur
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("active");
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      dropdowns.forEach((dropdown) =>
        dropdown.parentElement.classList.remove("active")
      );
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      dropdowns.forEach((dropdown) =>
        dropdown.parentElement.classList.remove("active")
      );
    }
  });
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
