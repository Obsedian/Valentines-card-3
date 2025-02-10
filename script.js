// 🌸 Floating hearts for all pages
document.addEventListener("DOMContentLoaded", function() {
    const floatingElements = document.querySelector('.floating-elements');

    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "0px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "floatUp 5s linear infinite";
        floatingElements.appendChild(heart);

        setTimeout(() => { heart.remove(); }, 5000);
    }

    setInterval(createFloatingHeart, 800);
});

// 💌 Page 0: Open the next page
function openNextPage() {
    window.location.href = "page1.html";
}

// 🎭 Page 1: Yes/No Button Trick
let noClickCount = 0;

function trickNoButton() {
    noClickCount++;

    if (noClickCount === 1) {
        createYesButtons(7); // First No click: 7 Yes buttons appear
    } else if (noClickCount === 2) {
        createYesButtons(25); // Second No click: 25 Yes buttons fill the screen
        document.querySelector(".no-button").style.display = "none"; // Hide No button
    }
}

function createYesButtons(count) {
    const buttonContainer = document.querySelector(".button-container");

    for (let i = 0; i < count; i++) {
        let yesBtn = document.createElement("button");
        yesBtn.className = "yes-button";
        yesBtn.innerText = "Yes";
        yesBtn.onclick = goToNextPage;
        yesBtn.style.position = "absolute";
        yesBtn.style.left = Math.random() * 80 + "vw";
        yesBtn.style.top = Math.random() * 80 + "vh";
        buttonContainer.appendChild(yesBtn);
    }
}

function goToNextPage() {
    window.location.href = "page2.html"; // Moves to the next page
}
