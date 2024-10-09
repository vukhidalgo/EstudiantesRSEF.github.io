let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextImage() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

function showPrevImage() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

document.querySelector('.next').addEventListener('click', showNextImage);
document.querySelector('.prev').addEventListener('click', showPrevImage);

const carousel = document.querySelector('.carousel');
let isDragging = false;
let startX;
let scrollLeft;

// Evento para el inicio del arrastre
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

// Evento para salir del carrusel
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});

// Evento para soltar el botón del mouse
carousel.addEventListener('mouseup', () => {
    isDragging = false;
});

// Evento para mover el ratón mientras se arrastra
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // El 2 puede ser ajustado para cambiar la velocidad de desplazamiento
    carousel.scrollLeft = scrollLeft - walk;
});

// Soporte para pantallas táctiles (touch)
carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});
