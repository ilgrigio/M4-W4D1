// import { myFetch } from "./index.js";
import { getPost, deletePost, editPost } from "./fetch.js";

const showContainer = document.querySelector(".container");
// Create function to recall by fetch
const deleteProduct = async (productId) => {
  try {
    await deletePost(productId);
    console.log(`Product ${productId} deleted.`);
  } catch (error) {
    console.error(`Failed to delete product ${productId}: ${error}`);
  }
  // window.location.assign("./frontend.html");
};

const editProduct = async (productId, updateProduct) => {
  try {
    await editPost(productId, updateProduct);
    console.log(`Product ${productId} edited.`);
  } catch (error) {
    console.error(`Failed to edit product ${productId}: ${error}`);
  }
  window.location.assign("./index.html");
};

const showRoom = async () => {
  const roomProduct = await getPost();
  let htmlShow = "";
  const navbar = document.createElement("nav");
  const att = document.createAttribute("class");
  att.value = "navbar bg-body-tertiary";

  roomProduct.map((product, index) => {
    htmlShow += `
    <div class="card">
      <img src="${product.imageUrl}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <h6 class="card-title">${product.brand}</h6>
        <h6 class="card-title">€${product.price.toFixed(2)}</h6>
          <div class="flex__button">
            <button class="btn btn-primary" id="edit${index}">Edit</button>
            <button class="btn btn-warning" id="details${index}"><a href="/details.html?id=${
      product["_id"]
    }">Dettagli</a></button>
          <button class="delete btn btn-danger" id="delete${index}">Delete</button>
        </div>
    </div>
  </div>`;

    document.body.prepend(navbar);
    showContainer.innerHTML = htmlShow;

    const deleteButtons = document.querySelectorAll(`#delete${index}`);
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        deleteProduct(product["_id"]);
      });
    });

    const editButtons = document.querySelectorAll(`#edit${index}`);
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        editProduct(product["_id"], updateProduct);
      });
    });
  });

  console.log(showContainer);
};
showRoom();
