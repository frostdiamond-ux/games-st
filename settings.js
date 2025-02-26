document.querySelector(".btn-back").addEventListener("click", () => {
    window.location.href = "index.html";
});const volumeSlider = document.getElementById("volume-slider");
const audio = new Audio("background-music.mp3"); // Ganti dengan file musik Anda
audio.loop = true;

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});

document.getElementById("music-toggle").addEventListener("change", (e) => {
    if (e.target.checked) {
        audio.play();
    } else {
        audio.pause();
    }
});
// Reset Level
document.getElementById("reset-levels").addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin mereset level? Semua progress akan hilang.")) {
        localStorage.setItem("currentLevel", 1); // Kembali ke Level 1
        localStorage.setItem("highestLevel", 1); // Reset level tertinggi yang dibuka
        localStorage.setItem("lives", 3); // Reset nyawa
        localStorage.setItem("coins", 0); // Reset koin
        alert("Level berhasil direset. Anda akan kembali ke Level 1.");
        window.location.href = "index.html"; // Kembali ke Main Menu
    }
});