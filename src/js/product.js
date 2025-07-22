import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import  getParam  from "./utils.mjs";
import productDetail from "./ProductDetails.mjs";

// An object created from the ProductDetails class that will be used to add products to the cart

const data = new ProductData();
const dataSource = data.getData();
const productId = getParam("product");

// eslint-disable-next-line no-undef
//const product = await dataSource.findProductById(productId)
/*setLocalStorage(productId,product);*/
const productDetails = new productDetail(productId,dataSource);

productDetails.init();
/*
function addProductToCart(product) {
  let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  if (!Array.isArray(cartItems) && cartItems !== null) {
    cartItems = [cartItems];
  }
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler

async function addToCartHandler(e) {
  const product = await dataSource.findProductById(productId);
  addProductToCart(product);
}*/

// add listener to Add to Cart button
/*
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

//THE INTIAL DEBUGGED ADDPRODUCTTOCART FUNCTION
/*
function addProductToCart(id,product) {
  if (localStorage.getItem(id) !== null) {
    setLocalStorage(id, product);
} else {
    setLocalStorage(id, product);
}
}*/

// add to cart button event handler
/*async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
 // addProductToCart(e.target.dataset.id,product);
  m.addProductToCart(e.target.dataset.id, product);
}*/
/*
// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

// get product id from URL*/
