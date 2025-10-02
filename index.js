console.log("CATEGORY");
const categorylist = document.querySelector(".categorylist");
getData("https://kea-alt-del.dk/t7/api/categories");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(categories) {
  console.log("category", categories);
  categories.forEach((category) => {
    console.log("category", category.category);
    categorylist.innerHTML += `

 <a href="produktliste.html?category=${category.category}">${category.category}</a>
        
        `;
  });
}
