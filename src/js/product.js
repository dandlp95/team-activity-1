import ExternalServices from "./ExternalServices.js";
import ProductDetails from "./productDetails.js";
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();

const productId = getParam("product");
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();
