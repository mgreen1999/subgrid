console.log("PRODUKTLISTE");
const product_list_container = document.querySelector(".product_list_container");
getData("https://kea-alt-del.dk/t7/api/products");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
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
         <p>DKK ${product.price},-</p>
        
        <a href="produkt.html">Read More</a>
      </article>`;
  });
}
