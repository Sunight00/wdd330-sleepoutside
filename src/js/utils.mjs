// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export default function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}


//This populates the string literal template
export function renderListWithTemplate(template, parentElement, list, position = 'beforeend', clear = true){
  const htmlStrings = list.map(lists => template(lists));
  if (clear){
    parentElement.innerHTML = '';
  }
   parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}


/*

function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
};  
var param = getParam('product'); 
console.log(param)

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams;
  console.log(product);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get('product');
  console.log(product);
*/