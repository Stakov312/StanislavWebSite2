let products= [
    {
        "id": "jfhgbvnscs",
        "name": "Клавиатура",
        "price": 45,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "images/img-1.jpg"
      },
      {
        "id": "Mouse",
        "name": "Игровая мышка",
        "price": 100,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "images/img-2.jpg"
      },
      {
        "id": "Microfon",
        "name": "Микрофон",
        "price": 43,
        "desc": "Крутой микрофон чтобы говорить в него",
        "img": "images/img-3.jpg"
      },
      {
        "id": "thyfhcbcv",
        "name": "Геймпад",
        "price": 300,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "images/img-4.jpg"
      },
    
      {
        "id": "jfhg",
        "name": "Наушники",
        "price": 45,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "images/img-5.jpg"
      },
      {
        "id": "ioytr",
        "name": "Готовый ПК",
        "price": 100,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "images/img-6.jpg"
      },
      {
        "id": "Mifdasngsdg",
        "name": "Монитор",
        "price": 250,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "images/img-7.jpg"
      },
      {
        "id": "thyfhc",
        "name": "Игровой принтер",
        "price": 300,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "images/img-8.jpg"
      }
  ]
;

function displayProductDetails(id) {
    const product = products.find(product => product.id === id);

    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('productImage').src = product.img;
        document.getElementById('productRating').textContent = product.rating;
        document.getElementById('productDesc').textContent = product.desc;
    }
}

// Получаем id из URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Вызываем функцию для отображения информации о товаре при загрузке страницы
window.onload = function() {
    displayProductDetails(id);
    console.log(id);
}