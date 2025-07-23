import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Result.Images.PrimaryMedium}"
      alt="${item.Result.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Result.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Result.Colors?.[0]?.ColorName || "No color available"}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.Result.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

const cat = JSON.parse(localStorage.getItem("so-cart")) || [];

const total = cat
  .map((item) => item.Result.FinalPrice)
  .reduce((sum, price) => sum + price, 0);

document.querySelector('.tfig').innerHTML = `$${total.toFixed(2)}`;