document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
        dots[i].classList.add('active');
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  // Auto-advance every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  // Show the first slide initially
  showSlide(currentSlide);
});
