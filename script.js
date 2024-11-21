//PAGE index.html
// Cible les éléments HTML
const imageContainer = document.getElementById("imageContainer");
const textOverlay = document.getElementById("textOverlay");
const clickMeGif = document.getElementById("clickMeGif");
const successGif = document.getElementById("successgif");

// Fonction pour afficher le GIF "Click Me"
function showClickMeGif() {
    clickMeGif.style.display = "block"; // Affiche le GIF
}

// Ajoute un écouteur pour détecter la fin de l'animation du texte
textOverlay.addEventListener("animationend", () => {
    setTimeout(showClickMeGif, 1000); // Affiche le GIF 1 seconde après la fin de l'animation
});

// Affiche l'image au début et démarre l'animation du texte après 1 seconde
window.onload = () => {
    showTextAnimation();
};

