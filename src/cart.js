let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

//Корзина
let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <img width="100" src=${search.img} alt="" />
        <div class="details">

          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>

          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>

          <h3>$ ${item * search.price}</h3>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Корзина пуста</h2>
    <a href="index.html">
      <button class="HomeBtn">Назад</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

//Удаление предмета из корзины
let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

//Очисть корзину (полность)
let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>Итоговая стоимость : $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Очистить корзину</button>
    `;
  } else return;
};

TotalAmount();


// ФИЛЬТРАЦИЯ

const filter = document.querySelector('#filters');
filters.addEventListener('input', filterGoods);

function filterGoods() {
  const categoryes = [...filters.querySelectorAll('#category input:checked')].map(n => n.value),
  rating = [...filters.querySelectorAll('#rating input:checked')].map(n => parseInt(n.value)),
  reliability = [...filters.querySelectorAll('#reliability input:checked')].map(n => n.value),
  model = [...filters.querySelectorAll('#model input:checked')].map(n => n.value),
  priceMin = document.querySelector('#price-min').value, 
  priceMax = document.querySelector('#price-max').value;
    
  outputGoods(data.filter(n => (    
    (!categoryes.length || categoryes.includes(n.title)) &&
    (!rating.length || n.rating >= 4) &&
    (!reliability.length || reliability.includes(n.reliability)) &&
    (!model.length || model.includes(n.model)) &&
    (!priceMin || priceMin <= n.price) && (!priceMax || priceMax >= n.price)    
  )));
}

function outputGoods(goods) {
  document.querySelector(".content").innerHTML = goods.map(n => `
  <div class="row3-items-container product" id = product-id-${n.id}>
           <div class="row3-item-information-container">
           <img class = "product-img" src=${n.img} alt="">
           <div class="add-to-cart-more">
               <div class="more">
               <a href="details.html?id=${n.id}">
                <i class = "fa-solid fa-info"></i>
               </a>
               </div>
               <div class="add-to-cart" onclick = "addToCart(${n.id})" id = "${n.id}">
               <i class="fa-solid fa-cart-plus add-item-to-cart"></i>
               </div>
           </div>
           </div>
           <div class="name-price">
           <p class="item-name">${n.name}</p><span class="item-price">$${n.price}</span>
           </div>
       </div>
`).join('');
}