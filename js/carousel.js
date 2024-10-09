let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-image');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);
