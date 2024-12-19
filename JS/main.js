// Sélectionne tous les éléments avec la classe 'events'
var events = document.querySelectorAll('.events');

// Parcours tous les éléments sélectionnés
for (var i = 0; i < events.length; i++) {
    // Ajoute un écouteur d'événement pour le survol de la souris
    events[i].addEventListener('mouseover', function(e) {
        // Change la couleur d'arrière-plan de l'élément survolé en '#f5f5f5'
        e.target.style.backgroundColor = '#f5f5f5';
        // Change la couleur du texte de l'élément survolé en '#1e90ff'
        e.target.style.color = '#1e90ff';
    });

    // Ajoute un écouteur d'événement pour la sortie du survol de la souris
    events[i].addEventListener('mouseout', function(e) {
        // Rétablit la couleur d'arrière-plan de l'élément à sa valeur par défaut
        e.target.style.backgroundColor = '';
        // Rétablit la couleur du texte de l'élément à sa valeur par défaut
        e.target.style.color = '';
    });
}


$(document).ready(function() {
    // Ajoute un écouteur d'événement pour le survol de la souris sur les éléments avec la classe 'event'
    $('.event').on('mouseenter', function() {
        // Ajoute la classe 'active' à l'élément survolé
        $(this).addClass('active');
    });

    // Ajoute un écouteur d'événement pour la sortie du survol de la souris sur les éléments avec la classe 'event'
    $('.event').on('mouseleave', function() {
        // Supprime la classe 'active' de l'élément survolé
        $(this).removeClass('active');
    });
});
