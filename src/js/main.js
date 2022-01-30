import ProductData from "./productData.js";
import ProductList from "./productList";

const dataSource = new ProductData("tents");
console.log(dataSource);
// const products = new ProductList();
// console.log(products.init());

const targetHtml = document.querySelector(".product-list");

const websiteProducts = new ProductList("tents", dataSource, targetHtml);

websiteProducts.init();
