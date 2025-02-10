let yesButtonCount = 0;

function goToNextPage() {
    yesButtonCount++;
    if (yesButtonCount === 1) {
        window.location.href = "page2.html";
    } else if (yesButtonCount === 2) {
        window.location.href = "page3.html";
    } else if (yesButtonCount === 3) {
        window.location.href = "page4.html";
    } else if (yesButtonCount === 4) {
        window.location.href = "page5.html";
    } else if (yesButtonCount === 5) {
        window.location.href = "page6.html";
    } else if (yesButtonCount === 6) {
        window.location.href = "page7.html";
    }
}

function trickNoButton() {
    let noButton = document.querySelector('.no-button');
    if (yesButtonCount < 7) {
        for (let i = 0; i < 7; i++) {
            let newYesButton = document.createElement("button");
            newYesButton.classList.add("yes-button");
            newYesButton.textContent = "Yes";
            newYesButton.onclick = goToNextPage;
            document.body.appendChild(newYesButton);
        }
        noButton.style.display = "none";
    }
}
