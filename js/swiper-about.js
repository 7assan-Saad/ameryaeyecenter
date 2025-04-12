const addsSwiper = new Swiper('.about-wrapper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 30,       // درجة التدوير
    stretch: 0,       // التمديد (0 = لا تمديد)
    depth: 200,       // العمق (المسافة بين الشرائح)
    modifier: 1,      // تأثير التكبير/التصغير
    slideShadows: true, // الظلال
  },

  // spaceBetween: 30,
  
  // pagination
  pagination: {
    el: '.about-pagination',
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
    992: {
      slidesPerView: 3
    }
  }
  
});