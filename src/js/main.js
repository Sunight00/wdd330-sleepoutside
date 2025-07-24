/*import productData from "../js/ProductData.mjs";
import ProductList from "../js/productList.mjs";*/
import loadHeaderFooter  from "./utils.mjs";
//import {productCardTemplate} from '../js/productList.mjs';

/*const dataSource = new productData("tents");

const rep = new ProductList(
  "tents",
  dataSource,
  document.querySelector(".product-list"),
);
rep.init();*/

loadHeaderFooter();
//const pro = list.map(product => productCardTemplate(product)).join('');

//document.querySelector('#h').innerHTML = pro;
import CheckoutProcess from './CheckoutProcess.mjs'


const n = new CheckoutProcess('so-cart','.summary')
n.calculateItemSubTotal()
n.calculateOrderTotal()
