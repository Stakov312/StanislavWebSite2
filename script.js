let data;
let url = '/data.json';
let response = await fetch(url);
console.log(response.ok);

if (response.ok) {
  data = await response.json();
  console.log(data);
} else {
  console.log("Ошибка HTTP: " + response.status);
}

let content = document.querySelector(".content");
console.log(content);

for (let prоduct of data) {
  console.log(prоduct.title);
  content.innerHTML += `
  <p>${prоduct.title}</p>
  <p>${prоduct.price}</p>
  `;
 }