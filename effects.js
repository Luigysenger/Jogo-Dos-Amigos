export function playSuccessSound() {
    try {
        const audio = new Audio("sons/acerto.mp3");
        audio.volume = 0.7;
        audio.play();
    } catch (e) {}
}

export function playErrorSound() {
    try {
        const audio = new Audio("sons/erro.mp3");
        audio.volume = 0.7;
        audio.play();
    } catch (e) {}
}

export function showConfetti() {
    if (window.confetti) {
        confetti({
            particleCount: 180,
            spread: 120,
            origin: { y: 0.6 }
        });
    }
}

export function showRain() {
    if (window.confetti) {
        confetti({
            particleCount: 220,
            angle: 90,
            spread: 45,
            startVelocity: 70,
            gravity: 2,
            origin: { x: 0.5, y: 0 }
        });
    }
}

export function celebrateVictory() {
    playSuccessSound();
    showConfetti();
}

export function celebrateDefeat() {
    playErrorSound();
    showRain();
}
