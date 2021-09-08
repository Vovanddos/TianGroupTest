const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    // effect: 'fade',
    autoplay: {
        delay: 10000,
    },
})

const slider1 = document.querySelector('.swiper-container1');



let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
});