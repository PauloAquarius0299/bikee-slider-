var swiper = new Swiper(".bike-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOninteraction: false,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    510: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    758: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    900: {
        slidesPerView: 4,
        spaceBetween: 20,

       },
      },
    });