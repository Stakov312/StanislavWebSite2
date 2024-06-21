

// let generateShop = () => {
//   return (shop.innerHTML = shopItemsData
//     .map((x) => {
//       let { id, name, price, desc, img } = x;
//       let search = basket.find((x) => x.id === id) || [];
//       return `
//     <div id=product-id-${id} class="item">
//         <img width="220" src=${img} alt="">
//         <div class="details">
//           <h3>${name}</h3>
//           <p>${desc}</p>
//           <div class="price-quantity">
//             <h2>$ ${price} </h2>
//             <div class="buttons">
//               <div id=${id} class="quantity">
//                 ${search.item === undefined ? 0 : search.item}
//               </div>
//                 <div class="addtocard">
//                 <button onclick="increment(${id})" class="buttoncard">Купить</button>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//     })
//     .join(""));
// };

// generateShop();


















let data;
let url = '../src/data.json';
let response = await fetch(url);
console.log(response.ok);

if (response.ok) {
  data = await response.json();
  console.log(data);
} else {
  console.log("Ошибка HTTP: " + response.status);
}

const filters = document.querySelector('#filters');
filters.addEventListener('input', filterGoods);

function filterGoods() {
  const categoryes = [...filters.querySelectorAll('#category input:checked')].map(n => n.value),
  rating = [...filters.querySelectorAll('#rating input:checked')].map(n => n.value),
  reliability = [...filters.querySelectorAll('#reliability input:checked')].map(n => n.value),
  model = [...filters.querySelectorAll('#model input:checked')].map(n => n.value),
  priceMin = document.querySelector('#price-min').value, 
  priceMax = document.querySelector('#price-max').value;
    
  outputGoods(data.filter(n => (    
    (!categoryes.length || categoryes.includes(n.title)) &&
    (!rating.length || rating.includes(n.rating)) &&
    (!reliability.length || reliability.includes(n.reliability)) &&
    (!model.length || model.includes(n.model)) &&
    (!priceMin || priceMin <= n.price) && (!priceMax || priceMax >= n.price)    
  )));
}
 // <a href="reting.html">
                    // <button class="HomeBtn">Оставить отзыв на товар</button>   
                    // </a>   

//let content = document.querySelector(".content");
function outputGoods(goods) {
    document.querySelector(".content").innerHTML = goods.map(n => `
      <div id=product-id-${n.id} class="item">
        <a href="details.html?id=${n.id}">
        <img width="220" src=${n.img} alt="" class="imgg">
                 </a>
        <div class="details">
          <h3>${n.name}</h3>
          <p>${n.desc}</p>
          <div class="price-quantity">
            <h2>$ ${n.price} </h2>

            <div class="buttons">
              <div id=${n.id} class="quantity">
                </div>
                  <div class="addtocard">
                    <button onclick="increment(${n.id})" class="buttoncard">Купить</button>
                   
                            
                  </div>
                </div>
          </div>
        </div>
      </div>
      
      `).join('');
}
outputGoods(data);



// SLIDER

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();



