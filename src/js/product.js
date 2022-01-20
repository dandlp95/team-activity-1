import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParam } from "./utils.js";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();


// or should we do it this way?
// async function getProductsDataAwait() {
//    products = await fetch("../json/tents.json").then(convertToJson);

// getProductsData();
// // add listener to Add to Cart button
// document.getElementById("addToCart").addEventListener("click", addToCart);
