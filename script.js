function showMap() {
  window.open("https://yandex.ru/maps/", "_blank");
}
const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const bgMusic = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playIcon.src = "images/pouse.png";
    playIcon.alt = "Pause";
  } else {
    bgMusic.pause();
    playIcon.src = "images/play.png";
    playIcon.alt = "Play";
  }
});

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); // задержка между появлениями
      }
    });
  },
  {
    threshold: 0.1,
  }
);

elements.forEach((el) => observer.observe(el));
