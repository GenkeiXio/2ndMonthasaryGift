// Animate timeline items when they enter the viewport
window.addEventListener('scroll', function() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      item.style.opacity = '1';
      item.style.animation = 'slideUp 1.5s ease forwards';
    }
  });
});
