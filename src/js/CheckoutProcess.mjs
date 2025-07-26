import {getLocalStorage} from './utils.mjs'
import ExternalServices from './ProductData.mjs';
const baseURL = import.meta.env.VITE_SERVER_URL


function packageItems(key){
  const items = JSON.parse(localStorage.getItem(key)) || [];
  const list = items.map((item) => ({
                    id: item.Result.Id,
                    name: item.Result.Name,
                    price: item.Result.FinalPrice,
                    quantity: 1
                }));
  return list
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
    this.list = getLocalStorage(this.key);
    this.calculateItemSubTotal();
    this.calculateOrderTotal()

    this.checkout(this.setData())
  }

  calculateItemSubTotal() {
      this.list = JSON.parse(localStorage.getItem(this.key)) || [];

      this.itemTotal = this.list
        .map((item) => item.Result.FinalPrice)
        .reduce((sum, price) => sum + price, 0);
        //document.querySelector('.t').innerHTML = `$${this.itemTotal.toFixed(2)}`;

        document.querySelector(`${this.outputSelector} #num-items`).innerHTML = this.list.length

  
  }

  calculateOrderTotal() {
    // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
    this.tax = (this.itemTotal * .06);
    this.shipping = 10 + (this.list.length - 1) * 2;
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.tax) +
      parseFloat(this.shipping)
    )
    // display the totals.
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    // once the totals are all calculated display them in the order summary page
    const tax = document.querySelector(`${this.outputSelector} #tax`);
    const shipping = document.querySelector(`${this.outputSelector} #shipping`);
    const orderTotal = document.querySelector(`${this.outputSelector} #orderTotal`);

    tax.innerText = `$${this.tax.toFixed(2)}`;
    shipping.innerText = `$${this.shipping.toFixed(2)}`;
    orderTotal.innerText = `$${this.orderTotal.toFixed(2)}`;  
  }


   /*async checkout() {
    const formElement = document.forms["checkout"];
    const order = formDataToJSON(formElement);

    order.orderDate = new Date().toISOString();
    order.orderTotal = this.orderTotal;
    order.tax = this.tax;
    order.shipping = this.shipping;
    order.items = packageItems(this.list);
    //console.log(order);

    try {
      const response = await services.checkout(order);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }*/



 setData(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryObject = {};

  const now = new Date();
  queryObject['orderDate'] = now;
  for (const [key, value] of urlParams.entries()) {
  queryObject[key] = value;
  }

  queryObject['items'] = packageItems('so-cart');

  queryObject['orderTotal'] = this.orderTotal;
  queryObject['shipping'] = this.shipping;
  queryObject['tax'] = this.tax;

console.log(queryObject);
}

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    const x = await fetch(`${baseURL}checkout/`, options)
    
    return x
    //.await fetch(`${baseURL}checkout/`, options).then(convertToJson);
  }

}