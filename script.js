console.log("Happy 2nd Monthsary, Bianca! 💗");

// Music toggle button
const toggleButton = document.getElementById("toggle-music");
const music = document.getElementById("bg-music");

toggleButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = "🔈";
  } else {
    music.pause();
    toggleButton.textContent = "🔇";
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