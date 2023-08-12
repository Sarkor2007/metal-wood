const openBtn = document.querySelector('.nav__open');
// const openBtnItem = document.querySelector('.nav__open-btn');
const body = document.querySelector('body');
const exitBtn = document.querySelector('.nav__exit');
const nav = document.querySelector('.nav');
const navFilter = document.querySelector('.nav-filter');
const navList = document.querySelectorAll('.nav__list-link');

openBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    // openBtnItem.classList.toggle('active');
    body.classList.toggle('active');
    navFilter.classList.add('active');
})

exitBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    // openBtnItem.classList.remove('active');
    body.classList.remove('active');
    navFilter.classList.remove('active');
})


navFilter.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('active');
    navFilter.classList.remove('active');
})


for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', () => {
        nav.classList.remove('active');
        body.classList.remove('active');
        navFilter.classList.remove('active');
    })
}

var firstSwiper = new Swiper(".mySwiperOne", {
    slidesPerView: 2.2,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        500: {
            spaceBetween: 10,
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 2.7,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var secondSwiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 2.2,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        500: {
            spaceBetween: 10,
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 2.7,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var secondSwiper = new Swiper(".mySwiperThree", {
    slidesPerView: 2.2,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        500: {
            spaceBetween: 10,
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 2.7,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});