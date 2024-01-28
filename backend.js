import { sendPost, getPost } from "./fetch.js";

const createProduct = (ev) => {
  ev.preventDefault();
  const name = document.getElementById("fname").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imgUrl").value;
  const price = parseFloat(document.getElementById("price").value);

  const dataProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  sendPost(dataProduct);
  alert("Hai aggiunto alla vetrina " + dataProduct["name"]);
};

const sbmButton = document.getElementById("p-form");
sbmButton.addEventListener("submit", createProduct);
// window.location.assign("./frontend.html");

const showProducts = async () => {
  const product = await getPost();
  console.log(product);
};
showProducts();

// Redirect
const redirectB = document.getElementById("b_redirect");
redirectB.addEventListener("click", () =>
  window.location.replace("./frontend.html")
);
