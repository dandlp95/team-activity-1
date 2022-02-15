import ProductData from "./productData.js";
import { getParam } from "./utils.js";
import ProductDetails from "./productDetails.js";

const productId = getParam("product");
const dataSource = new ProductData();

const product = new ProductDetails(productId, dataSource);
product.init();
