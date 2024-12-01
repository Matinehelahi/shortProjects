var swiper = new Swiper(".slider-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop:true,
    centerSlide:"true",
    garbCursor:"true",
    fade:"true",
    pagination: {
        el: ".swiper-pagination",
        Clipboard: true,
        dynamicBullets:"true",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});