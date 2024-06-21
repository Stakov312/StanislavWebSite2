let products = [
    {
        "id": "jfhgbvnscs",
        "name": "Клавиатура",
        "price": 45,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "../images/img-1.jpg"
      },
      {
        "id": "Mouse",
        "name": "Игровая мышка",
        "price": 100,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "../images/img-2.jpg"
      },
      {
        "id": "Microfon",
        "name": "Микрофон",
        "price": 43,
        "desc": "Крутой микрофон чтобы говорить в него",
        "img": "../images/img-3.jpg"
      },
      {
        "id": "thyfhcbcv",
        "name": "Геймпад",
        "price": 300,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "../images/img-4.jpg"
      },
    
      {
        "id": "jfhg",
        "name": "Наушники",
        "price": 45,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "../images/img-5.jpg"
      },
      {
        "id": "ioytr",
        "name": "Готовый ПК",
        "price": 100,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "../images/img-6.jpg"
      },
      {
        "id": "Mifdasngsdg",
        "name": "Монитор",
        "price": 250,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "../images/img-7.jpg"
      },
      {
        "id": "thyfhc",
        "name": "Игровой принтер",
        "price": 300,
        "desc": "Текст ради текста, чтобы был текст",
        "img": "../images/img-8.jpg"
      }
  ]







function sortByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

function sortByPrice2(products) {
    return products.sort((a, b) => b.price - a.price);
}

function Sort1 () {
    let sortedProducts = sortByPrice(products);


    // Очистить контейнер
    document.getElementById("content2").innerHTML = "";

    // Добавить отсортированные карточки
    sortedProducts.forEach(n => {
        const card = 
        "<div id='product-id-" + n.id + "'class='item'>" +
        "<a href='details.html?id=" + n.id + "'>" +
        "<img width='220' src=" + n.img + " class='imgg'>" +
                 "</a>" +
        "<div class='details'>" +
          "<h3>" + n.name + "</h3>" +
          "<p>" + n.desc + "</p>" +
          "<div class='price-quantity'>" + 
            "<h2>$" + n.price + "</h2>" +
            "<div class='buttons'>" + 
              "<div id=" + n.id + "class='quantity'>" +
                "</div>" +
                  "<div class='addtocard'>" + 
                    "<button onclick='increment(" + n.id + "})'  class='buttoncard'>Купить</button>"              
                    "</div>"
                  "</div>"
          "</div>"
        "</div>"
      "</div>";

      console.log(card);

        // Добавить созданную карточку на страницу
        document.getElementById("content2").insertAdjacentHTML('beforeend', card);
    });
}


function Sort2 () {
    let sortedProducts = sortByPrice2(products);


    // Очистить контейнер
    document.getElementById("content2").innerHTML = "";

    // Добавить отсортированные карточки
    sortedProducts.forEach(n => {
        const card = 
        "<div id='product-id-" + n.id + "'class='item'>" +
        "<a href='details.html?id=" + n.id + "'>" +
        "<img width='220' src=" + n.img + " class='imgg'>" +
                 "</a>" +
        "<div class='details'>" +
          "<h3>" + n.name + "</h3>" +
          "<p>" + n.desc + "</p>" +
          "<div class='price-quantity'>" + 
            "<h2>$" + n.price + "</h2>" +
            "<div class='buttons'>" + 
              "<div id=" + n.id + "class='quantity'>" +
                "</div>" +
                  "<div class='addtocard'>" + 
                    "<button onclick='increment(" + n.id + "})'  class='buttoncard'>Купить</button>"              
                    "</div>"
                  "</div>"
          "</div>"
        "</div>"
      "</div>";

        // Добавить созданную карточку на страницу
        document.getElementById("content2").insertAdjacentHTML('beforeend', card);
    });
}

    document.querySelector("#sort-button").addEventListener("click", Sort1);
    document.querySelector("#sort-button2").addEventListener("click", Sort2);



    
    