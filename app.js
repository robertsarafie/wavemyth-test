'use strict';

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
      const getLinks = link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`);
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
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-nextV2',
    prevEl: '.swiper-button-prevV2',
  },
});
