window.addEventListener('scroll', function() {
  const bg = document.querySelector('.full-screen-bg');
  const header = document.querySelector('.animated-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    bg.classList.add('hidden');
    header.classList.add('active');
  } else {
    bg.classList.remove('hidden');
    header.classList.remove('active');
  }
});
