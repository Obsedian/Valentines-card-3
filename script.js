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

function openNextPage() {
    window.location.href = "page1.html";
}
