import { setLocalStorage } from "./utils";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
    this.quantities = {};
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();

    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  // Added quantity counting to this function
  addToCart() {
    if (localStorage.getItem(this.product.Id) != null) {
      this.product.Quantity = this.product.Quantity + 1;
    } else {
      this.product.Quantity = 1;
    }
    setLocalStorage(this.product.Id, this.product);
  }

  renderProductDetails() {
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Images.PrimaryLarge}"
          alt="${this.product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button class="cartButton "id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
        </div></section>`;
  }
}
