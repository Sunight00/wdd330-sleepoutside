import { setLocalStorage, getLocalStorage } from './utils.mjs';

export default class productDetail{
    constructor(productId, dataSource){
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
    }

    async init(){
        // eslint-disable-next-line no-undef
        this.product = await this.dataSource.findProductById(this.productId);

       this.renderProductDetails();
        document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));

    }
    
    addProductToCart() {
     {
        if (localStorage.getItem(this.productId) !== null) {
            setLocalStorage(this.productId, this.product);
        }   
        else {
            setLocalStorage(this.productId, this.product);
        }
        }
    }

    renderProductDetails() {
        productDetailsTemplate(this.product);
        }
    }




function productDetailsTemplate(product) {
    
  document.querySelector('h2').textContent = product.Brand.Name;
  document.querySelector('h3').textContent = product.NameWithoutBrand;

  const productImage = document.querySelector('.productImage');
  productImage.src = product.Image;
  productImage.alt = product.NameWithoutBrand;

  document.querySelector('.productPrice').textContent = product.FinalPrice;
  document.querySelector('.productColor').textContent = product.Colors[0].ColorName;
  document.querySelector('.productDesc').innerHTML = product.DescriptionHtmlSimple;

}





















/*
function addProductToCart(id,product) {
  if (localStorage.getItem(id) !== null) {
    setLocalStorage(id, product);
} else {
    setLocalStorage(id, product);
}
}*/