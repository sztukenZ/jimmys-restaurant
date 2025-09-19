import { menuArray } from "./data.js";

const productSection = document.getElementById("products");
const orderSection = document.getElementById("order");
const orderedItems = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.product) {
    addItemToOrder(e.target.dataset.product);
  } else if (e.target.dataset.remove) {
    removeProduct(e.target.dataset.remove);
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
  const orderHtml = orderedItems.map(function (item, index) {
    return `
      <div class="order-product">
        <div class="order-product-info">
          <h3>${item.name}</h3>
          <button class="remove-btn" data-remove="${index}">remove</button>
        </div>

        <h4>$${item.price}</h4>
      </div>
    `;
  });

  return orderHtml.join("");
}

function renderOrderSection() {
  console.log(orderedItems);
  const totalPrice = orderedItems.reduce((sum, item) => sum + item.price, 0);

  const orderSectionHtml = `
  <h3>Your order</h3>

      ${renderOrderItems()}

      <div id="total-price">
        <h3>Total price:</h3>
        <h4>$${totalPrice}</h4>
      </div>
  <button class="green-btn">Complete order</button>
  `;

  orderSection.innerHTML = orderSectionHtml;
}

function removeProduct(productIndex) {
  console.log("Item removed");
  orderedItems.splice(Number(productIndex), 1);
  console.log(orderedItems);
  renderPage();
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
  if (orderedItems.length > 0) {
    renderOrderSection();
  } else {
    orderSection.innerHTML = "";
  }
}

renderPage();
