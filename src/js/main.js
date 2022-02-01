import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const dataSource = new ProductData("tents");

const targetHtml = document.querySelector(".product-list");

const websiteProducts = new ProductList("tents", dataSource, targetHtml);

websiteProducts.init();