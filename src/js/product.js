import ProductData from './productData.js';
const dataSource = new ProductData('tents');
console.log(dataSource.getData);

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// add to cart button event handler
function addToCart(e) {
  setLocalStorage(localStorage.length + 1, product);
}

getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
