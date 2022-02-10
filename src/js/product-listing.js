// Team Activity 5
import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();

const category = getParam("category");

const dataSource = new ProductData();

const listElement = document.querySelector(".product-list");

const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();

