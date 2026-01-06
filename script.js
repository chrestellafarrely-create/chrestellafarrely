// Loader + Scroll animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const scrollElements = document.querySelectorAll('.scroll');

  // hilangkan loader
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';

    // jalankan animasi scroll untuk semua section
    scrollElements.forEach(el => el.classList.add('scrolled'));
  }, 2000);
});
