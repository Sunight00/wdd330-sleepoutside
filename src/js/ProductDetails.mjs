const baseURL = import.meta.env.VITE_SERVER_URL
import { setLocalStorage, getLocalStorage } from './utils.mjs';

export default class productDetail{
    constructor(productId, dataSource){
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
    }

    async init(){
        // eslint-disable-next-line no-undef
        //this.product = await this.dataSource.findProductById(this.productId);
        const rawData =  `${baseURL}product/${this.productId}`;
        const data = await fetch(rawData);
        this.product  = await data.json();



       this.renderProductDetails();
        document
      .getElementById('addToCart')
      //.addEventListener('click', this.addProductToCart.bind(this.product));
      .addEventListener('click', ()=>{
        let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  if (!Array.isArray(cartItems) && cartItems !== null) {
    cartItems = [cartItems];
  }
  cartItems.push(this.product);
  setLocalStorage("so-cart", cartItems);


      });

    }


 /*addProductToCart(product) {
  let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  if (!Array.isArray(cartItems) && cartItems !== null) {
    cartItems = [cartItems];
  }
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
  //document.getElementById('q').textContent = ;
  
}
*/
    renderProductDetails() {
        productDetailsTemplate(this.product);
        }
    }




function productDetailsTemplate(product) {

    document.querySelector('#q').textContent = product.Result.Id;
  document.querySelector('h2').textContent = product.Result.Name;
  document.querySelector('h3').textContent = product.Result.NameWithoutBrand;

  const productImage = document.querySelector('.productImage');
  productImage.src = product.Result.Images.PrimaryLarge;
  productImage.alt = product.Result.NameWithoutBrand;

  document.querySelector('.productPrice').textContent = product.Result.FinalPrice;
  document.querySelector('.productColor').textContent = product.Result.Colors?.[0]?.ColorName;
  document.querySelector('.productDesc').innerHTML = product.Result.DescriptionHtmlSimple;

}





















/*
function addProductToCart(id,product) {
  if (localStorage.getItem(id) !== null) {
    setLocalStorage(id, product);
} else {
    setLocalStorage(id, product);
}
}*/