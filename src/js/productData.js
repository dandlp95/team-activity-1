let products = [];

function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
}

export default class ProductData {
    constructor(category) {
        this.category = category;
        this.path = `../json/${this.category}.json`
    }

    async getData() {
        const res = await fetch("../json/tents.json");
        const data = await convertToJson(res);
        return data;
    }

    findProductById(id) {
        const product = products.find(id);
        return product;
    }
}