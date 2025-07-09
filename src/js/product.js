
import { setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';
/*import { getParam } from './utils.mjs';*/

const dataSource = new ProductData('tents');
/*const productId = getParam('product');
console.log(dataSource.findProductById(productId));*/


function addProductToCart(id,product) {
  if (localStorage.getItem(id) !== null) {
    setLocalStorage(id, product);
} else {
    setLocalStorage(id, product);
}

}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(e.target.dataset.id,product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

// get product id from URL
