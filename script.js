// Navigasi Main Menu
document.getElementById("play-button").addEventListener("click", () => {
    window.location.href = "levels.html";
});

document.getElementById("shop-button").addEventListener("click", () => {
    window.location.href = "shop.html";
});

document.getElementById("settings-button").addEventListener("click", () => {
    window.location.href = "settings.html";
});

document.getElementById("about-button").addEventListener("click", () => {
    window.location.href = "about.html";
});

document.getElementById("exit-button").addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin keluar?")) {
        window.close();
    }
});
function checkDailyLogin() {
    const lastLogin = localStorage.getItem("lastLogin");
    const currentDate = new Date().toDateString();

    if (lastLogin !== currentDate) {
        let coins = parseInt(localStorage.getItem("coins")) || 0;
        coins += 100; // Bonus 100 koin setiap hari
        localStorage.setItem("coins", coins);
        localStorage.setItem("lastLogin", currentDate);
        alert("Selamat! Anda mendapatkan 100 koin dari login harian.");
    }
}

// Panggil fungsi ini setiap kali game dimulai
checkDailyLogin();
function updateLives() {
    const lastLifeUpdate = localStorage.getItem("lastLifeUpdate");
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastLifeUpdate;

    if (timeDiff >= 20 * 60 * 1000) { // 20 menit dalam milidetik
        let lives = parseInt(localStorage.getItem("lives")) || 3;
        if (lives < 3) {
            lives++;
            localStorage.setItem("lives", lives);
            localStorage.setItem("lastLifeUpdate", currentTime);
        }
    }
}


backgroundMusic.loop = true;
// Ambil elemen audio
const backgroundMusic = document.getElementById("background-music.mp3");

// Cek status musik dari localStorage
let isMusicPlaying = localStorage.getItem("isMusicPlaying") === "true";

// Jika musik seharusnya diputar, mainkan
if (isMusicPlaying) {
    backgroundMusic.play();
}

// Simpan status musik saat pengguna meninggalkan halaman
window.addEventListener("beforeunload", () => {
    localStorage.setItem("isMusicPlaying", !backgroundMusic.paused);
});


// Navigasi ke halaman lain
document.getElementById("play-button").addEventListener("click", () => {
    backgroundMusic.pause(); // Hentikan musik saat masuk ke in-game
    window.location.href = "levels.html";
});