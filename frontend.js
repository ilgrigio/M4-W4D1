import { getPost, deletePost, editPost } from "./fetch.js";
// import { createProduct } from "./backend.js";

const showContainer = document.querySelector(".container");
// Create function to delete product
const deleteProduct = async (productId) => {
  try {
    await deletePost(productId);
    console.log(`Product ${productId} deleted.`);
  } catch (error) {
    console.error(`Failed to delete product ${productId}: ${error.message}`);
  }
  window.location.assign("./frontend.html");
};

// Create function to edit product
const editProduct = async (productId) => {
  try {
    await editPost(productId);
    console.log(`Product ${productId} edited.`);
  } catch (error) {
    console.error(`Failed to edit product ${productId}: ${error}`);
  }

  // window.location.assign("./index.html");
};

// Create Navbar
const navbar = document.createElement("nav");
navbar.classList.add("navbar", "navbar-expand");

const links = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Video-Game-Controller-Icon-D-Edit.svg/768px-Video-Game-Controller-Icon-D-Edit.svg.png",
    alt: "Icona del controller di gioco",
  },
  { href: "./index.html", text: "Aggiungi Gioco" },
  { href: "#", text: "Link 3" },
];

const navLinks = links.map((link) => {
  if (link.src) {
    const img = document.createElement("img");
    img.setAttribute("class", "home");
    img.src = link.src;
    img.alt = link.alt;
    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = "#";
    a.append(img);
    return a;
  } else {
    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = link.href;
    a.textContent = link.text;
    return a;
  }
});

navLinks.forEach((link) => {
  navbar.append(link);
});

document.body.prepend(navbar);

const showRoom = async () => {
  const roomProduct = await getPost();
  let productCards = "";

  // Start .map from get
  roomProduct.map((product, index) => {
    productCards += `
    <div class="card">
      <img src="${product.imageUrl}" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <h6 class="card-title">${product.brand}</h6>
        <h6 class="card-title">€${product.price.toFixed(2)}</h6>
          <div class="flex__button">
            <button class="edit btn btn-primary" id="edit${index}">Edit</button>
            <button class="btn btn-warning" id="details${index}"><a href="/details.html?id=${
      product["_id"]
    }">Dettagli</a></button>
          <button class="delete btn btn-danger" id="delete${index}">Delete</button>
        </div>
    </div>
  </div>`;

    showContainer.innerHTML = productCards;

    const deleteButtons = document.querySelectorAll(`.delete`);
    deleteButtons.forEach((productId) => {
      productId.addEventListener("click", () => {
        deleteProduct(product["_id"]);
        alert(`Hai rimosso ${product["name"]}`);
      });
    });

    const editButtons = document.querySelectorAll(`.edit`);
    editButtons.forEach((productId) => {
      productId.addEventListener("click", () => {
        editProduct(product["_id"]);
      });
    });
  }); // Fine .map

  console.log(showContainer);
};
showRoom();
