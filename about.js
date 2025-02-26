document.querySelector(".btn-back").addEventListener("click", () => {
    window.location.href = "index.html";
});
const audio = new Audio("background-music.mp3"); // Ganti dengan file musik Anda
audio.loop = true;