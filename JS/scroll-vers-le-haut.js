let calcScrollValue = () => {
  // Sélectionne l'élément de progression de défilement
  let scrollProgress = document.getElementById("progress");
  // Sélectionne l'élément de valeur de progression
  let progressValue = document.getElementById("progress-value");
  // Obtient la position actuelle de défilement de la page
  let pos = document.documentElement.scrollTop;
  // Calcule la hauteur totale de défilement de la page
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // Calcule la valeur de progression en pourcentage
  let scrollValue = Math.round((pos * 100) / calcHeight);

  // Affiche ou masque l'élément de progression en fonction de la position de défilement
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  // Ajoute un écouteur d'événement au clic sur l'élément de progression
  scrollProgress.addEventListener("click", () => {
    // Fait défiler la page jusqu'en haut
    document.documentElement.scrollTop = 0;
  });

  // Définit le dégradé de fond de l'élément de progression en fonction de la valeur de progression
  scrollProgress.style.background = `conic-gradient(#3c6e71 ${scrollValue}%, #d9d9d9 ${scrollValue}%)`;
};

// Appelle la fonction calcScrollValue lors du défilement de la page
window.onscroll = calcScrollValue;
// Appelle la fonction calcScrollValue lorsque la page est entièrement chargée
window.onload = calcScrollValue;
