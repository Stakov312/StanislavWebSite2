let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

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
  
    // console.log(basket);
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
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
  };
  
  let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  
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
           <img class="product-img" src=${n.img}>
           <div class="add-to-cart-more">
               <div class="more">
               <a href="details.html?id=${n.id}">
                <i class = "fa-solid fa-info"></i>
               </a>
               </div>
               <div class="add-to-cart" onclick = "addToCart(${n.id})" id="${n.id}">
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