// Menu Toggle pour mobile
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Parallax Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}, 6000);