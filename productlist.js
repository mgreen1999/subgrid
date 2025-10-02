console.log("PRODUKTLISTE");
const product_list_container = document.querySelector(".product_list_container");
const h2_produktliste = document.querySelector(".h2_produktliste");
let allData;
document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", filterKlik);
});

function filterKlik(evt) {
  showFiltered(evt.currentTarget.dataset.season);
}

function showFiltered(filter) {
  if (filter === "All") {
    showProducts(allData);
  } else {
    const filteredSeasonsArr = allData.filter((season) => season.season === filter);
    showProducts(filteredSeasonsArr);
  }
  console.log("showFiltered", filter);
  console.log(allData.filter((season) => season.season === filter));
}

const category = new URLSearchParams(window.location.search).get("category");
const url = `https://kea-alt-del.dk/t7/api/products?limit=200&category=${category}`;

getData(url);

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      showProducts(allData);
    });
}

function showProducts(products) {
  product_list_container.innerHTML = "";
  console.log("products", products);
  h2_produktliste.innerHTML = `  <h2 class= "productlist_h2"> ${category}</h2>`;

  products.forEach((product) => {
    console.log("productdisplayname", product.productdisplayname);
    product_list_container.innerHTML += `<article class="cards">
<div class = "${product.soldout === 1 ? "sold_out" : ""}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Grøn taske" />
        <p> ${product.soldout === 1 ? "Sold Out" : ""} </p>
        </div>
        <h3>${product.productdisplayname}</h3>
        <p class="product_cat">
          <span> ${product.articletype}</span> | <span> ${product.brandname}</span>
        </p>
        <p class="price">
         <p class = ${product.discount ? "discounted_line" : ""}>DKK ${product.price},-</p>
           <div class= ${product.discount ? "discounted" : ""}>
                    <p>${product.discount ? `Now DKK ${(product.price - product.price * (product.discount / 100)).toFixed(2)},-` : ""}</p>
                    <p>${product.discount ? `${product.discount}%` : ""}</p>
                </div>
        
        <a href="produkt.html?id=${product.id}">Read More</a>
      </article>`;
  });
}
