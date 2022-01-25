import ProductData from "./productData.js";
import { getParam } from "./utils.js";
import ProductDetails from "./productDetails.js";

const productId = getParam("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();

// This will return the json product in the json file.
//console.log(dataSource.findProductById(productId));

// const dataSource = new ProductData("tents");
// console.log(dataSource.getData());

// PASSED to productsData module. Not sure if can be commented out.
// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }

// Commented out as part of team act. 2
// function setLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

//get tents data\

// PASSED TO productsData module
// function getProductsData() {
//   fetch("../json/tents.json")
//     .then(convertToJson)
//     .then((data) => {
//       products = data;
//     });
// }
// or should we do it this way?
// async function getProductsDataAwait() {
//    products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler

// Commented out and moved to productDetails as well
// function addToCart(e) {
//   const product = products.find((item) => item.Id === e.target.dataset.id);
//   setLocalStorage(localStorage.length + 1, product);
// }

// Comment out as part of team act 2
// getProductsData();
// add listener to Add to Cart button

// THIS DOESNT NEED TO BE COMMENTED OUT
// document.getElementById("addToCart").addEventListener("click", addToCart);
