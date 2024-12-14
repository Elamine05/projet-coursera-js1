// Fonction exécutée lors du chargement de la page
window.onload = function () {
    console.log("Page loaded");
    addTabFocus();
};

// Fonction pour ajouter les attributs tabindex et gérer les événements
function addTabFocus() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach((img, index) => {
        // Ajout des attributs tabindex pour la navigation clavier
        img.setAttribute('tabindex', 0);

        // Écouteurs pour les événements de souris
        img.addEventListener('mouseover', () => img.style.borderColor = "blue");
        img.addEventListener('mouseleave', () => img.style.borderColor = "#ddd");

        // Écouteurs pour les événements focus et blur
        img.addEventListener('focus', () => img.style.borderColor = "green");
        img.addEventListener('blur', () => img.style.borderColor = "#ddd");
    });

    console.log("Tab focus added to images");
}
