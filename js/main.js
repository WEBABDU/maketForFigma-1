const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuFooter = document.querySelector(
  ".hamburger-menu.footer-hamburger"
);
const menu = document.querySelector(".nav");
const footerList = document.querySelector(".footer-list-sm");

const answerFormBtn = document.querySelector(".answer__form-btn");
const modal = document.querySelector(".modal");
const cancelModalBtn = document.querySelector(".cancel-btn");

hamburgerMenu.addEventListener("click", () => {
  menu.hasAttribute("data-visible")
    ? hamburgerMenu.setAttribute("aria-expanded", false)
    : hamburgerMenu.setAttribute("aria-expanded", true);
  menu.toggleAttribute("data-visible");
});

hamburgerMenuFooter.addEventListener("click", () => {
  footerList.hasAttribute("data-visible")
    ? hamburgerMenuFooter.setAttribute("aria-expanded", false)
    : hamburgerMenuFooter.setAttribute("aria-expanded", true);

  footerList.toggleAttribute("data-visible");
});

answerFormBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("is-open");
  document.querySelector("body").style.overflow = "hidden";
});

cancelModalBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
  document.querySelector("body").style.overflow = "auto";
});

// Swiper

let gallerySwiper = new Swiper(".gallery-slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".gallery-btn-next",
    prevEl: ".gallery-btn-prev",
  },
  centeredSlidesBounds: true,
  slidesPerView: 4,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 1000px
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
      // scrollbar: false,
    },
  },
});

let galleryBuildingSlider = new Swiper(".gallery-building-slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".gallery-building-next",
    prevEl: ".gallery-building-prev",
  },
  centeredSlidesBounds: true,
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 1000px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
      // scrollbar: false,
    },
  },
});

let coachesSlider = new Swiper(".coaches__slider", {
  centeredSlidesBounds: true,
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".coaches-btn-next",
    prevEl: ".coaches-btn-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is >= 1000px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
      // scrollbar: false,
    },
  },
});
