function toggleMenu() {
    var menu = document.getElementById("menu_hamburguer_header");
    menu.classList.toggle("active");
}

function closeMenu() {
    var menu = document.getElementById("menu_hamburguer_header");
    menu.classList.remove("active");
}

// slick 01 
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
}

showSlide(currentSlide);

// slick 02
