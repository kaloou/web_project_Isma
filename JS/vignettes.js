// Sélectionner tous les éléments avec la classe 'toggle' et les stocker dans la variable 'toggles'
let toggles = document.getElementsByClassName('toggle');

// Sélectionner tous les éléments avec la classe 'teneur' et les stocker dans la variable 'contentDiv'
let contentDiv = document.getElementsByClassName('teneur');

// Sélectionner tous les éléments avec la classe 'icon' et les stocker dans la variable 'icons'
let icons = document.getElementsByClassName('icon');

// Parcourir tous les éléments 'toggle' dans la liste 'toggles'
for (let i = 0; i < toggles.length; i++) {
    // Ajouter un écouteur d'événements 'click' à chaque élément 'toggle'
    toggles[i].addEventListener('click', () => {
        // Vérifier si la hauteur de l'élément 'contentDiv' est différente de la hauteur de défilement
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            // Si la hauteur est différente, définir la hauteur de l'élément 'contentDiv' sur la hauteur de défilement
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            // Changer la couleur du texte de l'élément 'toggle' en vert
            toggles[i].style.color = "#3c6e71";
            // Supprimer la classe 'fa-plus' de l'élément 'icon' et ajouter la classe 'fa-minus'
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        } else {
            // Si la hauteur est la même, définir la hauteur de l'élément 'contentDiv' sur 0
            contentDiv[i].style.height = "0px";
            // Changer la couleur du texte de l'élément 'toggle' en bleu foncé
            toggles[i].style.color = "#111130";
            // Supprimer la classe 'fa-minus' de l'élément 'icon' et ajouter la classe 'fa-plus'
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        // Parcourir tous les éléments 'contentDiv' dans la liste 'contentDiv'
        for (let j = 0; j < contentDiv.length; j++) {
            // Vérifier si l'indice 'j' est différent de l'indice 'i'
            if (j !== i) {
                // Si les indices sont différents, définir la hauteur de l'élément 'contentDiv' sur 0
                contentDiv[j].style.height = "0px";
                // Changer la couleur du texte de l'élément 'toggle' en bleu foncé
                toggles[j].style.color = "#111130";
                // Supprimer la classe 'fa-minus' de l'élément 'icon' et ajouter la classe 'fa-plus'
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}