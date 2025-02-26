const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; // Daftar level
const levelButtons = document.getElementById("level-buttons");
const highestLevel = parseInt(localStorage.getItem("highestLevel")) || 1; // Ambil progress tertinggi

levels.forEach(level => {
    const button = document.createElement("button");
    button.textContent = `Level ${level}`;
    button.classList.add("btn");

    // Kunci level yang belum bisa diakses
    if (level > highestLevel) {
        button.disabled = true; // Nonaktifkan tombol
        button.style.opacity = "0.5"; // Buat tombol terlihat redup
    }

    button.addEventListener("click", () => {
        localStorage.setItem("currentLevel", level);
        window.location.href = "game.html";
    });
    levelButtons.appendChild(button);
});

// Kembali ke Menu
document.getElementById("back-to-menu").addEventListener("click", () => {
    window.location.href = "index.html";
});
const audio = new Audio("background-music.mp3"); // Ganti dengan file musik Anda
audio.loop = true;