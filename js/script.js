const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
     // Default parameters
  slidesPerView: 7,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
},
centeredSlides: true,
effect: 'coverflow',
  coverflowEffect: {
    rotate: 1,
    slideShadows: true,
  },
  });