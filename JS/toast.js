function myFunction() {
  // Sélectionne l'élément avec l'id "snackbar"
  var x = document.getElementById("snackbar");
  // Ajoute la classe "show" à l'élément
  x.className = "show";
  // Définit un délai de 3000 millisecondes (3 secondes)
  setTimeout(function () {
    // Remplace la classe "show" par une chaîne vide pour masquer l'élément
    x.className = x.className.replace("show", "");
  }, 3000);
}
