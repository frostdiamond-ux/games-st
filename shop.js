document.getElementById("back-to-menu").addEventListener("click", () => {
    window.location.href = "index.html";
});
// Fungsi untuk mengklaim hadiah login harian
document.getElementById("claim-reward").addEventListener("click", () => {
    const lastLogin = localStorage.getItem("lastLogin");
    const currentDate = new Date().toDateString();
    let loginStreak = parseInt(localStorage.getItem("loginStreak")) || 0;

    if (lastLogin !== currentDate) {
        loginStreak = (loginStreak % 7) + 1; // Reset setelah hari ke-7
        const rewards = [100, 200, 300, 400, 500, 600, 700]; // Hadiah per hari
        const reward = rewards[loginStreak - 1];

        let coins = parseInt(localStorage.getItem("coins")) || 0;
        coins += reward;
        localStorage.setItem("coins", coins);
        localStorage.setItem("lastLogin", currentDate);
        localStorage.setItem("loginStreak", loginStreak);

        alert(`Anda mendapatkan ${reward} koin! Streak: ${loginStreak} hari.`);
        updateShopUI();
    } else {
        alert("Anda sudah mengklaim hadiah hari ini.");
    }
});

// Fungsi untuk membeli nyawa
document.getElementById("buy-life").addEventListener("click", () => {
    let coins = parseInt(localStorage.getItem("coins")) || 0;
    if (coins >= 500) {
        coins -= 500;
        localStorage.setItem("coins", coins);
        alert("Anda berhasil membeli 1 nyawa!");
        updateShopUI();
    } else {
        alert("Koin tidak cukup!");
    }
});

// Fungsi untuk memperbarui UI Shop
function updateShopUI() {
    const coins = parseInt(localStorage.getItem("coins")) || 0;
    const loginStreak = parseInt(localStorage.getItem("loginStreak")) || 0;

    document.getElementById("shop-coin-count").textContent = `💰${coins}`;
    document.getElementById("login-streak").textContent = `Streak: ${loginStreak} hari`;
}

// Kembali ke Menu
document.getElementById("back-to-menu").addEventListener("click", () => {
    window.location.href = "index.html";
});
// Update UI saat Shop dibuka
updateShopUI();

const audio = new Audio("background-music.mp3"); // Ganti dengan file musik Anda
audio.loop = true;