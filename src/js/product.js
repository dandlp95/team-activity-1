import ExternalServices from "./ExternalServices.js";
import { getParam } from "./utils.js";
import ProductDetails from "./productDetails.js";

const productId = getParam("product");
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();
