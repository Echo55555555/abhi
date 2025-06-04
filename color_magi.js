let rotation = 0;
let isEffectRunning = false;

function boomerangEffect() {
    let title = document.getElementById("title");
    let startBtn = document.getElementById("startBtn");

    // Hide button after first click
    startBtn.style.display = "none";

    // Update text & make it visible
    title.textContent = "Surprise, Abhijith U Are Amazing Bro";
    title.style.opacity = "1";  // Make visible
    title.style.textAlign = "center"; // Center the text

    // Apply rotation effect
    rotation += 360;
    title.style.transform = `rotate(${rotation}deg) scale(1.2)`;

    // Start continuous effect
    if (!isEffectRunning) {
        isEffectRunning = true;
        setInterval(createPopperBurst, 1000); // Burst every second
    }
}

// Function to create a popper burst
function createPopperBurst() {
    for (let i = 0; i < 20; i++) {
        let popper = document.createElement("div");
        popper.classList.add("popper");
        document.body.appendChild(popper);

        // Set random position
        popper.style.top = Math.random() * window.innerHeight + "px";
        popper.style.left = Math.random() * window.innerWidth + "px";

        // Remove popper after animation
        setTimeout(() => {
            popper.remove();
        }, 1500);
    }
}
