const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });