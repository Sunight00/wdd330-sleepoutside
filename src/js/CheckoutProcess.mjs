import {getLocalStorage} from './utils.mjs'
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
    this.calculateItemSummary();
  }

  calculateItemSubTotal() {
      this.list = JSON.parse(localStorage.getItem(this.key)) || [];

      this.itemTotal = this.list
        .map((item) => item.Result.FinalPrice)
        .reduce((sum, price) => sum + price, 0);
        document.querySelector('.tfig').innerHTML = `$${this.itemTotal.toFixed(2)}`;
  }

  calculateOrderTotal() {
    // calculate the tax and shipping amounts. Add those to the cart total to figure out the order total
    this.tax = (this.itemTotal)
    this.shipping =
    this.orderTotal =

    // display the totals.
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    const tax = document.querySelector(`${this.outputSelector} #tax`);


    tax.innerText = `$${this.tax.toFixed(2)}`;
  }
}