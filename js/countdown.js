// Set the target date 2 years from now
const targetDate = new Date();
targetDate.setFullYear(targetDate.getFullYear() + 2);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = 
    `${days}d ${hrs}h ${mins}m ${secs}s`;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "💖 We're together again! 💖";
  }
}

setInterval(updateCountdown, 1000);
function changeVideo(videoSrc) {
  const videoPlayer = document.getElementById('mainVideo');
  videoPlayer.querySelector('source').src = videoSrc;
  videoPlayer.load();
  videoPlayer.play();
}