const levels = [
    {
        question: "Tebak teks 😹",
        image: "image1.jpg",
        options: ["Bising bodo aku nak tido", "A mimir", "Lelucon terstruktur"],
        answer: "A mimir"
    },
    {
        question: "Tebak teks 😹",
        image: "image2.jpg",
        options: ["Ilmu hitam", "Ilmu esempe", "Ilmu putih"],
        answer: "Ilmu hitam"
    },
    {
        question: "Tebak teks 😹",
        image: "image3.jpg",
        options: ["Edan", "jawa", "Ya ya saya setuju 😹"],
        answer: "Edan"
    },
    {
        question: "Tebak teks 😹",
        image: "image4.jpg",
        options: ["Tim baik", "Tim memek", "Tim membagus"],
        answer: "Tim memek"
    },
    {
        question: "Tebak teks 😹",
        image: "image5.jpg",
        options: ["Diluar nalar cuyy", "Logika cuyyy", "Edann"],
        answer: "Diluar nalar cuyy"
    },
        {
        question: "Tebak teks 😹",
        image: "image6.jpg",
        options: ["apcb😹", "abcd😹", "efgh😹"],
        answer: "apcb😹"
    },
        {
        question: "Tebak teks 😹",
        image: "image7.jpg",
        options: ["dongo dongo", "must a nice must a nice", "ngentot ngentot"],
        answer: "dongo dongo"
    },
            {
        question: "Tebak teks 😹",
        image: "image8.jpg",
        options: ["tewas ketiban muwani😹", "tewas tertimpa lirik", "tewas mengenaskan"],
        answer: "tewas mengenaskan"
    },
            {
        question: "Tebak teks 😹",
        image: "image9.jpg",
        options: ["lu ngapain jir😹", "udah kah?", "udah yapping nya?"],
        answer: "udah yapping nya?"
    },
            {
        question: "Tebak teks 😹",
        image: "image10.jpg",
        options: ["bentar nak, waifu ayah sedang dihina", "cukurukuk😹","sedang menunggu ingfo"],
        answer: "cukurukuk😹"
    },
    
                {
        question: "Tebak teks 😹",
        image: "image11.jpg",
        options: ["kenapa tuh kira-kira 😹?", "plis isepkan dulu le 😹", "ambooii 😹"],
        answer: "kenapa tuh kira-kira 😹?"
    },
    
                {
        question: "Tebak teks 😹",
        image: "image12.jpg",
        options: ["sedih aku wak", "sakit hati aku wak", "kamprett",],
        answer: "sakit hati aku wak"
    },    
                {
        question: "Tebak teks 😹",
        image: "image13.jpg",
        options: ["cukurukuk", "patuhi perintahku", "raja mesir"],
        answer: "cukurukuk"
    },
    {
        question: "Tebak teks 😹",
        image: "image14.jpg",
        options: ["100jt pun ku bayar", "3jt pun ku bayar", "50jt pun ku bayar"],
        answer: "100jt pun ku bayar"
    },
    
                {
        question: "Tebak teks 😹",
        image: "image15.jpg",
        options: ["Penyakit siput gila", "penyakit fesnuk gila", "penyakit tiktod gila"],
        answer: "penyakit tiktod gila"
    },
    
                {
        question: "Tebak teks 😹",
        image: "image16.jpg",
        options: ["maaf ga minaj", "ga minaj", "ga waras"],
        answer: "maaf ga minaj"
    },
    
    {
        question: "Tebak teks 😹",
        image: "image17.jpg",
        options: ["cerdass", "berotak senku", "dongo"],
        answer: "dongo"
    },
    
                    {
        question: "Tebak teks 😹",
        image: "image18.jpg",
        options: ["aku jg mw" , "lezaaat", "yummy"],
        answer: "aku jg mw"
    },
    
                        {
        question: "Tebak teks 😹",
        image: "image19.jpg",
        options: ["undangan untuk berhubungan badan", "undangan untuk berhubungan intim", "undangan untuk menghina emyu"],
        answer: "undangan untuk berhubungan badan"
    },
    
                        {
        question: "Tebak teks 😹",
        image: "image20.jpg",
        options: ["dan yap", "apa coba", "sekian terimakasih"],
        answer: "dan yap"
    },
    
                        {
        question: "Tebak teks 😹",
        image: "image21.jpg",
        options: ["pls isapkan dlu le", "pliss maaf kan dulu le", "Kocokkan lalu isapkan dulu le"],
        answer: "pls isapkan dlu le"
    },
    // Tambahkan level 6-10 dengan format yang sama
    ];
// Ambil level saat ini dari localStorage
const currentLevel = parseInt(localStorage.getItem("currentLevel")) || 1;
const levelData = levels[currentLevel - 1];

// Ambil elemen HTML
const questionElement = document.getElementById("question");
const imageElement = document.getElementById("image");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const livesElement = document.getElementById("lives");
const timerElement = document.getElementById("timer");
const timerBar = document.getElementById("timer-bar");
const coinCountElement = document.getElementById("coin-count");

// Inisialisasi variabel
let lives = parseInt(localStorage.getItem("lives")) || 3; // Ambil nyawa dari localStorage
let timeLeft = 20; // Waktu mulai dari 20 detik
let timerInterval;
let coins = parseInt(localStorage.getItem("coins")) || 0;

// Load Level Data
questionElement.textContent = levelData.question;
imageElement.src = levelData.image;
document.getElementById("current-level").textContent = currentLevel;
coinCountElement.innerHTML = `💰${coins}`;
livesElement.innerHTML = "❤️".repeat(lives);
// Load Options
levelData.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    button.addEventListener("click", () => {
        if (option === levelData.answer) {
            resultElement.textContent = "Benar!";
            correctSound.play();
            coins += 20 * currentLevel;
            localStorage.setItem("coins", coins);
            coinCountElement.innerHTML = `💰${coins}`;

            // Update progress pemain
            const highestLevel = parseInt(localStorage.getItem("highestLevel")) || 1;
            if (currentLevel === highestLevel) {
                localStorage.setItem("highestLevel", currentLevel + 1);
            }

            clearInterval(timerInterval);
            setTimeout(() => {
                if (currentLevel < levels.length) {
                    localStorage.setItem("currentLevel", currentLevel + 1);
                    window.location.href = "game.html";
                } else {
                    alert("Selamat! Anda telah menyelesaikan semua level.");
                    window.location.href = "levels.html";
                }
            }, 1000);
        } else {
            resultElement.textContent = "Salah, coba lagi!";
            wrongSound.play();
            optionsElement.classList.add("shake");
            setTimeout(() => {
                optionsElement.classList.remove("shake");
            }, 500);
            loseLife();
        }
    });
    optionsElement.appendChild(button); // Tambahkan tombol ke dalam container options
});

// Timer
function startTimer() {
    timerBar.style.width = "100%"; // Mulai dari 100%
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        timerBar.style.width = `${(timeLeft / 20) * 100}%`; // Update progress bar

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            loseLife();
        }
    }, 1000);
}

// Nyawa
function loseLife() {
    lives--;
    localStorage.setItem("lives", lives); // Simpan nyawa ke localStorage
    livesElement.innerHTML = "❤️".repeat(lives);

    if (lives <= 0) {
        clearInterval(timerInterval);
        alert("Game Over! Nyawa Anda habis.");
        resetGame();
    }
}

// Reset Game
function resetGame() {
    localStorage.setItem("currentLevel", 1);
    localStorage.setItem("lives", 3); // Reset nyawa
    localStorage.setItem("coins", 0);
    window.location.href = "levels.html";
}

// Start Timer
startTimer();

// Kembali ke Level Selection
document.getElementById("back-to-levels").addEventListener("click", () => {
    inGameMusic.pause();
    window.location.href = "levels.html";
});

// Sound Effect
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

// Musik In-Game
const inGameMusic = new Audio("in-game-music.mp3");
inGameMusic.loop = true;
inGameMusic.play();
audio.loop = true;