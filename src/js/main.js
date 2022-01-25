import ProductData from "./productData.js";
import ProductList from "./productList";


const dataSource = new ProductData("tents");

const products = new ProductList("tents", "section", dataSource);
console.log(products.init());

