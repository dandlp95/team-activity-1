function convertToText(res) {
  if (res.ok) return res.text();
  else throw new Error("Bad Response");
}

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// Added as part of team 2 act.
export function getParam(params) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productInfo = urlParams.get(params);
  return productInfo;
}

export function renderListWithTemplate(
  template,
  parentElement,
  list,
  callback
) {
  list.forEach((product) => {
    const clone = template.content.cloneNode(true);
    const filledTemplate = callback(clone, product);
    parentElement.appendChild(filledTemplate);
  });
}

/*
 * Team Activity 4
 */
export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) clone = callback(clone, data);
  parent.appendChild(clone);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
  const header = await loadTemplate("../partials/header.html");
  const footer = await loadTemplate("../partials/footer.html");
  const headerElement = document.getElementById("main-header");
  const footerElement = document.getElementById("main-footer");
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
  populateSuperscript();
}

/**
 * Cart superscript function
 */
async function populateSuperscript() {
  document.querySelector(
    "#cart-items-num"
  ).textContent = calculateTotalCartItems();
}

function calculateTotalCartItems() {
  let total = 0;
  getCartContents().forEach((item) => (total += item.Quantity));
  return total;
}

export function getCartContents() {
  const cartItems = [];
  let cartItem;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    cartItem = getLocalStorage(key);
    cartItems.push(cartItem);
  }

  return cartItems;
}

export function alertMessage(message, scroll = true, duration = 3000) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;
  
  alert.addEventListener("click", function(e) {
      if(e.target.tagName == "SPAN") {
        main.removeChild(this);
      }
  })
  const main = document.querySelector("main");
  main.prepend(alert);
  // make sure they see the alert by scrolling to the top of the window
  //we may not always want to do this...so default to scroll=true, but allow it to be passed in and overridden.
  if(scroll)
    window.scrollTo(0,0);

  // left this here to show how you could remove the alert automatically after a certain amount of time.
  // setTimeout(function () {
  //   main.removeChild(alert);
  // }, duration);
}