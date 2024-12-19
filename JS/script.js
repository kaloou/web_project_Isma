let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

// Ajoute un écouteur d'événement au clic sur l'icône du menu
menu.onclick = () => {
  // Bascule la classe "bx-x" pour changer l'apparence de l'icône du menu (de menu à croix ou vice versa)
  menu.classList.toggle("bx-x");
  // Bascule la classe "open" pour afficher ou masquer la barre de navigation
  navbar.classList.toggle("open");
};
