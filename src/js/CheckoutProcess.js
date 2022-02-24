import { getLocalStorage } from './utils.js';
import ExternalServices from './ExternalServices.js';

const services = new ExternalServices();

function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

export default class CheckoutProcess {
    constructor(key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector;
      this.list = [];
      this.itemTotal = 0;
      this.shipping = 0;
      this.tax = 0;
      this.orderTotal = 0;
    }
    init() {
      for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            this.list.push(getLocalStorage(key));
          }
      this.calculateItemSummary();
      this.calculateOrdertotal();
    }
    async checkout() {
      const formElement = document.forms['checkout-form'];
  
      const json = formDataToJSON(formElement);
      // add totals, and item details
      json.orderDate = new Date();
      json.orderTotal = this.orderTotal;
      json.tax = this.tax;
      json.shipping = this.shipping;
      json.items = packageItems(this.list);
      console.log(json);
      try {
        const res = await services.checkout(json);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }

    calculateItemSummary() {
      // calculate and display the total amount of the items in the cart, and the number of items.
      const summaryElement = document.querySelector(
        this.outputSelector + ' #subtotal'
      );
      const itemNumElement = document.querySelector(
        this.outputSelector + ' #itemNumber'
      );
      itemNumElement.innerText = " (" + this.list.length + ")";
      // calculate the total of all the items in the cart
      const amounts = this.list.map((item) => item.FinalPrice);
      this.itemTotal = amounts.reduce((sum, item) => sum + item);
      summaryElement.innerText = '$' + (this.itemTotal.toFixed(2));
      
    }
    calculateOrdertotal() {
      // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
      
      // display the totals.
      this.tax = .06;
      this.shipping = 10 +((this.list.length - 1)*2);
      this.orderTotal = ((this.itemTotal * this.tax) + (this.itemTotal) + (this.shipping)).toFixed(2);;
      console.log(this.orderTotal);
      this.displayOrderTotals();
    }
    displayOrderTotals() {
      // once the totals are all calculated display them in the order summary page
      const taxElement = document.querySelector('#tax');
      taxElement.innerHTML = "$" + (this.tax * this.itemTotal).toFixed(2);

      const shippingElement = document.querySelector('#shipping');
      shippingElement.innerHTML = "$" + this.shipping;

      const orderTotalElement = document.querySelector('#orderTotal');
      orderTotalElement.innerHTML = "$" + this.orderTotal;
      
    }
    
  }
              