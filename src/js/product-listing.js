import productData from "../js/ProductData.mjs";
import ProductList from "../js/productList.mjs";
import  getParam  from "./utils.mjs";

//import {productCardTemplate} from '../js/productList.mjs';

const category = getParam("category")  // Default to "tents" if no category is provided
const dataSource = new productData("tents");

const rep = new ProductList(
  category,
  dataSource,
  document.querySelector(".product-list"),
);
rep.init();