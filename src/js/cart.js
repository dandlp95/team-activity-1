// const { doc } = require("prettier");

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function renderCartItem(item, key) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>
<li>
<button class="deleteButton" data-id="${key}">&#10006</button>
</li>
`;
  return newItem;
}

function getCartContents() {
  const cartItems = [];
  let cartItem;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    cartItem = getLocalStorage(key);
    cartItems.push(cartItem);
  }

  return cartItems
}

function displayCartItems(cartItems) {
  const htmlItems = cartItems.map((item, index) => renderCartItem(item, localStorage.key(index)));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

displayCartItems(getCartContents());

function addDeleteItemEvent() {
  const deleteButtons = document.querySelectorAll(".deleteButton");

  deleteButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      const key = e.path[0].getAttribute("data-id");
      localStorage.removeItem(key);
      getCartContents();
      location.reload();
    })
  })
}

addDeleteItemEvent();

/**
 * Cart total functions and function call
 */
function isCartEmpty() {
  if(localStorage.length <= 0) {
    return true;
  }
  else {
    return false;
  }
}

function calculateTotal() {

}

function displayTotal() {
  const cartFooter = document.querySelector('.cart-footer');
  if(!isCartEmpty()) {
    cartFooter.classList.remove('hide');
  }
}

displayTotal();