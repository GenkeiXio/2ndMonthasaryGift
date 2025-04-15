document.addEventListener('keydown', function (e) {
  const carousel = document.querySelector('#photoCarousel');
  if (!carousel) return;

  if (e.key === 'ArrowRight') {
    bootstrap.Carousel.getInstance(carousel).next();
  } else if (e.key === 'ArrowLeft') {
    bootstrap.Carousel.getInstance(carousel).prev();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById("bg-music");
  if (sessionStorage.getItem("musicPlaying")) {
      bgMusic.play();
  }
  // Try playing the music automatically
  const playMusic = () => {
      bgMusic.play().catch(() => {
          console.log("Autoplay prevented, waiting for user interaction.");
      });
  };

  // Play music on first user interaction
  document.body.addEventListener("click", playMusic, { once: true });
});
