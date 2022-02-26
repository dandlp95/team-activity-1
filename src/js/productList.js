import { renderListWithTemplate } from "./utils.js";

export default class productList {
  constructor(category, dataSource, targetHtml) {
    // Not sure about this one
    //this.products = [];
    this.category = category;
    this.targetHtml = targetHtml;
    this.dataSource = dataSource;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    //console.log(list);

    this.renderList(list);
  }

  renderList(list) {
    const template = document.querySelector("#product-card-template");

    renderListWithTemplate(
      template,
      this.targetHtml,
      list,
      this.prepareTemplate
    );
  }

  prepareTemplate(templateClone, product) {
    templateClone.querySelector("a").href += product.Id;
    templateClone.querySelector("img").src = product.Images.PrimaryMedium;
    templateClone.querySelector("img").alt += product.NameWithoutBrand;
    // Checks for discounts and marks discounted items with "ON SALE!""
    if (product.IsClearance) {
      templateClone.querySelector("#discount").textContent = "ON SALE!";
    }
    templateClone.querySelector("#brand").textContent = product.Brand.Name;
    templateClone.querySelector("h2").textContent = product.Name;
    templateClone.querySelector("p").textContent = product.ListPrice;

    return templateClone;
  }

  /*Add a method here to filter out the tents that are not supposed to show up in the page*/
  // filterTents(list){
  // }
}
