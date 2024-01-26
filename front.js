// import { myFetch } from "./index.js";
// const getFetch = new myFetch();
import { getPost } from "./fetch.js";
import { products } from "./fetch.js";

const showCase = document.querySelector(".container");

const showRoom = async () => {
  const roomProduct = await getPost();
  roomProduct.map((product) => {
    showCase.innerHTML += `
  <div class="card">
    <img src="${product.imageUrl}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <h6 class="card-title">${product.brand}</h6>
        <div class="flex__button">
          <button>${product.price.toFixed(2)}</button>
          <button><a href="/dettagli.html?id=${
            product["_id"]
          }">Dettagli</a></button>
        </div>
    </div>
  </div>`;
    console.log(showCase);
  });
  // console.log(roomProduct);
};
showRoom();
