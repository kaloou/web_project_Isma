const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

// Ajoute un écouteur d'événement au clic sur le bouton du menu hamburger
menuHamburger.addEventListener("click", () => {
  // Bascule la classe "mobile-menu" pour afficher ou masquer le menu sur les appareils mobiles
  navLinks.classList.toggle("mobile-menu");
});
