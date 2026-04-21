let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

var swiper;

function initSwiper() {
    if (window.innerWidth <= 768) {
        if (swiper !== undefined) {
            swiper.destroy(true, true); // Destruye el slider en mobile
            swiper = undefined;
        }
    } else if (swiper === undefined) {
        swiper = new Swiper(".blogs-slider", {
            loop: true,
            grabCursor: true,
            spaceBetween: 10,
            slidesPerView: 2, // En escritorio muestra 2
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

// Ejecutar al cargar y al redimensionar
window.onload = initSwiper;
window.onresize = initSwiper;

// Al scrollear, NO cerramos el menú, solo manejamos el color del header
window.onscroll = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};