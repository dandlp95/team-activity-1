import CheckoutProcess from "./CheckoutProcess.js";

const myCheckout = new CheckoutProcess("so-cart", ".order-summary");
myCheckout.init();

document
  .querySelector("#zipcode")
  .addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));

// listening for click on the submit button
document.querySelector('#checkoutSubmit')
  .addEventListener('click', (e) => {
    e.preventDefault();
    var myForm = document.forms[0];
    var chk_status = myForm.checkValidity();
    myForm.reportValidity();
    if(chk_status) 
      myCheckout.checkout();
  });