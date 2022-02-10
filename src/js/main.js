import ProductData from "./productData.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";
import Alert from "./alert.js";

loadHeaderFooter();

const dataSource = new ProductData("tents");

const targetHtml = document.querySelector(".product-list");

const websiteProducts = new ProductList("tents", dataSource, targetHtml);

websiteProducts.init();

const alerts = new Alert("json/alert.json", "main");
alerts.init();
