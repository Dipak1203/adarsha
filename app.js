let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    loop : true,
    autoplay:{
        speed:3000,
        disableOnInteraction: false
    }
  });