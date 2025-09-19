import { menuArray } from "./data.js";

const productSection = document.getElementById("products");
const orderSection = document.getElementById("order");
const orderedItems = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.product) {
    addItemToOrder(e.target.dataset.product);
  }
});

function addItemToOrder(itemId) {
  const targetMenuItem = menuArray.filter(function (item) {
    return item.id.toString() === itemId;
  })[0];

  orderedItems.push(targetMenuItem);
  renderPage();
}

function renderOrderItems() {
  const orderHtml = orderedItems.map(function (item) {
    return `
      <div class="order-product">
        <div class="order-product-info">
          <h3>${item.name}</h3>
          <button class="remove-btn">remove</button>
        </div>

        <h4>$${item.price}</h4>
      </div>
    `;
  });

  orderSection.innerHTML = orderHtml.join("");
}

function renderProducts() {
  const productsHtml = menuArray.map(function (item) {
    let { name, ingredients, id, price, emoji } = item;

    console.log(id);

    return `
       <div class="product">
        <div class="product-info">
          <div class="product-emoji">${emoji}</div>
          <div class="product-data">
            <h3>${name}</h3>
            <p>${ingredients}</p>
            <h4>$${price}</h4>
          </div>
        </div>
        <button class="add-product-btn" id="add-${name}" data-product="${id}">+</button>
      </div>
    `;
  });

  productSection.innerHTML = productsHtml.join("");
}

function renderPage() {
  renderProducts();
  if (orderedItems) {
    renderOrderItems();
  }
}

renderPage();
