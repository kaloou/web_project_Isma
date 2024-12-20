// ===================== TOGGLE SECTIONS =====================

// Sélection des éléments avec les classes 'toggle', 'teneur' et 'icon'
let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("teneur");
let icons = document.getElementsByClassName("icon");

// Ajout des écouteurs d'événements pour les éléments 'toggle'
for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    // Basculer l'affichage du contenu
    if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#3c6e71";
      icons[i].classList.replace("fa-plus", "fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.replace("fa-minus", "fa-plus");
    }

    // Fermer les autres éléments
    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.replace("fa-minus", "fa-plus");
      }
    }
  });
}

// ===================== SNACKBAR FUNCTION =====================

function myFunction() {
  let x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(() => {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// ===================== SCROLL PROGRESS =====================

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.display = pos > 100 ? "grid" : "none";

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#3c6e71 ${scrollValue}%, #d9d9d9 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// ===================== MENU TOGGLE =====================

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// ===================== POPUP HANDLING =====================

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".popup").style.display = "block";
  }, 1000);
});

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});

// ===================== EVENTS HOVER EFFECT =====================

let events = document.querySelectorAll(".events");

events.forEach((event) => {
  event.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#f5f5f5";
    e.target.style.color = "#1e90ff";
  });

  event.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  });
});

// ===================== jQUERY EVENTS =====================

$(document).ready(() => {
  $(".event").on("mouseenter", function () {
    $(this).addClass("active");
  });

  $(".event").on("mouseleave", function () {
    $(this).removeClass("active");
  });
});

// ===================== FORM TOGGLE =====================

const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

// Ouvrir le formulaire
formOpenBtn.addEventListener("click", () => home.classList.add("show"));

// Fermer le formulaire
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// Afficher/masquer le mot de passe
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    getPwInput.type = getPwInput.type === "password" ? "text" : "password";
    icon.classList.toggle("uil-eye");
    icon.classList.toggle("uil-eye-slash");
  });
});

// Activer le formulaire d'inscription
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

// Activer le formulaire de connexion
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// ===================== HAMBURGER MENU =====================

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
