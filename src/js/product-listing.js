import ExternalServices from "./ExternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();

const category = getParam("category");

const dataSource = new ExternalServices();

const listElement = document.querySelector(".product-list");

const myList = new ProductList(category, dataSource, listElement);

myList.init();
