import productData from "../js/ProductData.mjs";
import ProductList from "../js/productList.mjs";

//import {productCardTemplate} from '../js/productList.mjs';

const dataSource = new productData("tents");

const rep = new ProductList(
  "tents",
  dataSource,
  document.querySelector(".product-list"),
);
rep.init();