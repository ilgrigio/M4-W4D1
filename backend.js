import { sendPost, getPost } from "./fetch.js";

let dataProduct;
export const createProduct = (ev) => {
  ev.preventDefault();
  const name = document.getElementById("fname").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imgUrl").value;
  const price = parseFloat(document.getElementById("price").value);

  dataProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  if (!name || !description || !brand || !imageUrl || !price) {
    alert("Per favore, completa tutti i campi del form.");
  } else {
    sendPost(dataProduct);
    alert(
      "Il prodotto " +
        dataProduct.name +
        " è stato aggiunto con successo alla vetrina!"
    );
    window.location.replace("./frontend.html");
  }
};
// Redirect
const redirectButton = document.getElementById("b_redirect");
redirectButton.addEventListener("click", () => {
  window.location.href = "./frontend.html";
});

const sbmButton = document.getElementById("p-form");
sbmButton.addEventListener("submit", createProduct);

const showProducts = async () => {
  const product = await getPost();
  console.log(product);
};
showProducts();
