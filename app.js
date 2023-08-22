// // import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const body = document.getElementsByTagName('BODY')[0];

  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    body.classList.toggle('overflow-hidden');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide();

const swiper = new Swiper('.slide-content', {
  slidesPerView: 1,
  spaceBetween: 1000,
  centerSlide: 'true',
  grabCursor: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-nextV2',
    prevEl: '.swiper-button-prevV2',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
