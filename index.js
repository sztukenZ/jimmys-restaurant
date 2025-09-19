import { menuArray } from "./data.js";

const productSection = document.getElementById("products");
const orderSection = document.getElementById("order");

function renderProducts() {
  const productsHtml = menuArray.map(function (item) {
    let { name, ingredients, id, price, emoji } = item;

    // console.log(name);

    return `
       <div class="product">
        <div class="product-info">
          <div class="product-emoji">${item.emoji}</div>
          <div class="product-data">
            <h3>${item.name}</h3>
            <p>${item.ingredients}</p>
            <h4>$${item.price}</h4>
          </div>
        </div>
        <button class="add-product-btn">+</button>
      </div>
    `;
  });

  productSection.innerHTML = productsHtml.join("");
}

renderProducts();
