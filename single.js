console.log("Produkt loaded....");

// const id = 1599;

const id = new URLSearchParams(window.location.search).get("id");

const productUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
const product_container = document.querySelector(".product_container");

console.log("product: ", productUrl);

//get the data

function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("shows data her", data);

  product_container.innerHTML = `
  
<img class="img_product" src="https://kea-alt-del.dk/t7/images/webp/1000/${id}.webp"
                alt="omen Green Outdoor Bag">
            <div>

                <section class="info">
                    <h2>Product Information</h2>
                    <dl>
                        <dt>Model name</dt>
                        <dd>${data.productdisplayname}</dd>
                        <dt>Season</dt>
                        <dd>${data.season}</dd>
                        <dt>Production year</dt>
                        <dd>${data.productionyear}</dd>
                    </dl>
                    <h1>${data.brandname}</h1>
                   <p>DKK ${data.price},-</p>
                    <section class="purchaseBox">
                        <h3>${data.productdisplayname}</h3>
                        <p> Geonaute | ${data.articletype}</p>
                        <form>
                            <label>Choose a size:
                                <select name="size">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </label>
                            <button>Add to basket</button>
                        </form>
                    </section>
                </section>
            </div>

  `;
}

getData();
