

import { renderListWithTemplate } from './utils.mjs';
export function productCardTemplate(product) {
  const discount = product.FinalPrice < product.SuggestedRetailPrice ? 'DISCOUNTED' : '';
  return `
    <li class="product-card">
      <h5>${discount}</h5>
      <a href="/product_pages/?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}">
        <h2 class="card__brand">${product.Brand.Name}</h2>
        <h3 class="card__name">${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
    `;
}


export default class ProductList {
    constructor(category,dataSource,listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.htmlElement = listElement;
    }


    async init() {
        //const list = await this.dataSource.getData(); before week week modification
        const list = await this.dataSource.getData(this.category);
        return this.renderlist(list);
        
    }

    renderlist(list){
            
            renderListWithTemplate(productCardTemplate, this.htmlElement, list); 
    }
}