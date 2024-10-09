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
