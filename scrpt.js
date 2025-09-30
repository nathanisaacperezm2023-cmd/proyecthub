const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  // Asegura que el índice esté dentro del rango
  if (i < 0) {
    index = slide.length - 1;
  } else if (i >= slide.length) {
    index = 0;
  } else {
    index = i;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  showSlide(index - 1);
});

next.addEventListener('click', () => {
  showSlide(index + 1);
});

// Automático (opcional)
setInterval(() => {
  showSlide(index + 1);
}, 5000); // Cambia cada 5 segundos
