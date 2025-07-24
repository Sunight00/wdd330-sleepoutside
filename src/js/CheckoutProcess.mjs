import {getLocalStorage} from './utils.mjs'


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
}