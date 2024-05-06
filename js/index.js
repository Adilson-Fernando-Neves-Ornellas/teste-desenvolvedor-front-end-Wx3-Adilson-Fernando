function toggleMenu() {
    var menu = document.getElementById("menu_hamburguer_header");
    menu.classList.toggle("active");
}

function closeMenu() {
    var menu = document.getElementById("menu_hamburguer_header");
    menu.classList.remove("active");
}

// slick 01 ----------------------------------------------------------------------------------------------------
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

// slick 02-----------------------------------------------------------------------------------------------------
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.carousel-dots');

// Criar os indicadores de posição (bolinhas)
for (let i = 0; i < items.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === currentIndex) {
        dot.classList.add('active');
    }
    dot.setAttribute('onclick', `goToSlide(${i})`);
    dotsContainer.appendChild(dot);
}

function showSlideDois(index) {
    items.forEach((item, i) => {
        const offset = index * -100;
        item.style.transform = `translateX(${offset}%)`;
    });

    // Atualizar o indicador de posição (bolinhas)
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToSlide(index) {
    currentIndex = index;
    showSlideDois(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlideDois(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlideDois(currentIndex);
}

// Exibir o primeiro slide inicialmente
showSlideDois(currentIndex);

// slick 03-----------------------------------------------------------------------------------------------------
let currentIndexTres = 0;
const itemsSlickTres = document.querySelectorAll('.carousel-item-tres');
const dotsContainerTres = document.querySelector('.carousel-dots-tres');

// Criar os indicadores de posição (bolinhas)
for (let i = 0; i < itemsSlickTres.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot-tres');
    if (i === currentIndexTres) {
        dot.classList.add('active');
    }
    dot.setAttribute('onclick', `goToSlideTres(${i})`);
    dotsContainerTres.appendChild(dot);
}

function showSlideTres(index) {
    itemsSlickTres.forEach((item, i) => {
        const offset = index * -100;
        item.style.transform = `translateX(${offset}%)`;
    });

    // Atualizar o indicador de posição (bolinhas)
    const dots = document.querySelectorAll('.carousel-dot-tres');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToSlideTres(index) {
    currentIndexTres = index;
    showSlideTres(currentIndexTres);
}

function nextSlideTres() {
    currentIndexTres = (currentIndexTres + 1) % itemsSlickTres.length;
    showSlideTres(currentIndexTres);
}

function prevSlideTres() {
    currentIndexTres = (currentIndexTres - 1 + itemsSlickTres.length) % itemsSlickTres.length;
    showSlideTres(currentIndexTres);
}

// Exibir o primeiro slide inicialmente
showSlideTres(currentIndexTres);