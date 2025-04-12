const addsSwiper = new Swiper('.adds-wrapper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  
  // pagination
  pagination: {
    el: '.adds-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
  
});


const testimonialsSwiper = new Swiper('.testimonials-wrapper', {
  // Optional parameters
  // direction: 'vertical',
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  // spaceBetween: 60,

  // pagination
  pagination: {
    el: '.testimonials-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    
    999: {
      slidesPerView: 2
    },
  }

});


const contractsSwiper = new Swiper('.contracts-wrapper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  // spaceBetween: 10,
  
  // pagination
  pagination: {
    el: '.contracts-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
  
});