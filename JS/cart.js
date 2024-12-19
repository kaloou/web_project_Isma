
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "montrer";
  setTimeout(function(){ x.className = x.className.replace("montrer", ""); }, 3000);
}


// Sélection des éléments du DOM
const btnCart = document.querySelector('#cart-icon'); // Bouton d'ouverture du panier
const cart = document.querySelector('.cart'); // Conteneur du panier
const btnClose = document.querySelector('#cart-close'); // Bouton de fermeture du panier

// Écouteur d'événement pour l'ouverture du panier
btnCart.addEventListener('click', () => {
  cart.classList.add('cart-active'); // Ajoute la classe 'cart-active' au conteneur du panier pour l'afficher
});

// Écouteur d'événement pour la fermeture du panier
btnClose.addEventListener('click', () => {
  cart.classList.remove('cart-active'); // Supprime la classe 'cart-active' du conteneur du panier pour le masquer
});

// Écouteur d'événement lorsque le contenu du DOM est chargé
document.addEventListener('DOMContentLoaded', loadmatch);

function loadmatch() {
  loadContent(); // Charge le contenu
}

function loadContent() {
  // Supprime les éléments du panier
  let btnRemove = document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn) => {
    btn.addEventListener('click', removeItem); // Ajoute un écouteur d'événement pour supprimer un élément du panier
  });

  // Événement de modification de la quantité d'un produit
  let qtyElements = document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input) => {
    input.addEventListener('change', changeQty); // Ajoute un écouteur d'événement pour changer la quantité d'un produit
  });

  let cartBtns = document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart); // Ajoute un écouteur d'événement pour ajouter un produit au panier
  });

  updateTotal(); // Met à jour le total du panier
}

// Fonction pour supprimer un élément du panier
function removeItem() {
  if (confirm('Êtes-vous sûr de supprimer?')) {
    let title = this.parentElement.querySelector('.cart-match-title').innerHTML;
    itemList = itemList.filter((el) => el.title != title); // Supprime l'élément du tableau itemList
    this.parentElement.remove(); // Supprime l'élément du DOM
    loadContent(); // Recharge le contenu du panier
  }
}

// Fonction pour changer la quantité d'un produit
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1; // Si la quantité n'est pas un nombre ou est inférieure à 1, la quantité est définie sur 1
  }
  loadContent(); // Recharge le contenu du panier
}

let itemList = []; // Tableau pour stocker les produits du panier

// Fonction pour ajouter un produit au panier
function addCart() {
  let match = this.parentElement;
  let title = match.querySelector('.match-title').innerHTML;
  let price = match.querySelector('.match-price').innerHTML;
  let imgSrc = match.querySelector('.match-img').src;

  let newProduct = { title, price, imgSrc }; // Crée un nouvel objet représentant le produit

  // Vérifie si le produit existe déjà dans le panier
  if (itemList.find((el) => el.title == newProduct.title)) {
    alert("Produit déjà ajouté au panier");
    return;
  } else {
    itemList.push(newProduct); // Ajoute le nouveau produit au tableau itemList
  }

  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent(); // Recharge le contenu du panier
}

// Fonction pour créer le contenu d'un produit dans le panier
function createCartProduct(title, price, imgSrc) {
  return `
    <div class="cart-box">
      <img src="${imgSrc}" class="cart-img">
      <div class="detail-box">
        <div class="cart-match-title">${title}</div>
        <div class="price-box">
          <div class="cart-price">${price}</div>
          <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
      </div>
      <ion-icon name="trash" class="cart-remove"></ion-icon>
    </div>
  `;
}

function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-box');
  const totalValue = document.querySelector('.total-price');

  let total = 0;

  cartItems.forEach((product) => {
    let priceElement = product.querySelector('.cart-price');
    let price = parseFloat(priceElement.innerHTML.replace("€", ""));
    let qty = product.querySelector('.cart-quantity').value;
    total += price * qty;
    product.querySelector('.cart-amt').innerText = (price * qty) + " €";
  });

  totalValue.innerHTML = '€' + total;

  const cartCount = document.querySelector('.cart-count');
  let count = itemList.length;
  cartCount.innerHTML = count;

  if (count == 0) {
    cartCount.style.display = 'none';
  } else {
    cartCount.style.display = 'block';
  }
}
