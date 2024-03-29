import { getPost, deletePost, editPost } from "./fetch.js";

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
const editProduct = async (productId, dataProduct) => {
  try {
    await editPost(productId, dataProduct);
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.error(`Failed to edit product ${productId}: ${error.message}`);
  }
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
        <button
          class="edit btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#editModal${index}"
        >Edit
        </button>

        <button class="btn btn-warning" id="details${index}">
        <a
        href="/details.html?id=${product[`_id`]}"
        >Dettagli</a
        >
        </button>
        <button class="delete btn btn-danger" id="delete${index}">Delete</button>
        </div>
        </div>

        <!-- Edit Modal -->
        <div class="modal fade" id="editModal${index}" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Product</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
          <div class="modal-body">
          <!-- Add your edit form here -->
            <form id="editForm${index}">
              <label for="editName${index}">Name:</label>
              <input
                type="text"
                id="editName${index}"
                name="name"
                value="${product.name}"
              />
              <label for="editBrand${index}">Brand:</label>
              <input
                type="text"
                id="editBrand${index}"
                name="brand"
                value="${product.brand}"
              />
              <label for="editPrice${index}">Price:</label>
              <input
                type="text"
                id="editPrice${index}"
                name="price"
                value="${product.price}"
              />
              <label for="editDescription${index}">Description:</label>
              <input
                type="text"
                id="editDescription${index}"
                name="description"
                value="${product.description}"
              />
              <label for="editImageUrl${index}">ImageUrl:</label>
              <input
                type="text"
                id="editImageUrl${index}"
                name="imageUrl"
                value="${product.imageUrl}"
              />
            </form>
          </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>

          <button
          data-bs-dismiss="modal"
            type="button"
            class="btn btn-primary"
            data-target="editModal${index}"
            id="saveChanges${index}"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
 </div>
`;
    showContainer.innerHTML = productCards;

    const deleteButtons = document.querySelectorAll(`.delete`);
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Get index from id button
        const index = button.id.replace("delete", "");
        // Use the index to get the corresponding product
        const product = roomProduct[index];
        console.log(`Id del del pulsante: delete${index}`);
        console.log(`Indice del prodotto: ${index}`);
        deleteProduct(product["_id"]);
        alert(`Hai rimosso ${product["name"]}`);
      });
    });
    // Edit button
    const editButtons = document.querySelectorAll(`.edit`);
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // editProduct(product["_id"]);
      });
    });
    // Save Modal button
    const saveButtons = document.querySelectorAll(`button[id^="saveChanges"]`);
    saveButtons.forEach((saveButton) => {
      saveButton.addEventListener("click", () => {
        const index = saveButton.id.replace("saveChanges", "");
        const product = roomProduct[index];
        const updatedDataProduct = {
          name: document.getElementById(`editName${index}`).value,
          brand: document.getElementById(`editBrand${index}`).value,
          price: document.getElementById(`editPrice${index}`).value,
          description: document.getElementById(`editDescription${index}`).value,
          imageUrl: document.getElementById(`editImageUrl${index}`).value,
        };
        editProduct(product["_id"], updatedDataProduct);
        // window.location.reload();
      });
    });
  });
  // End .map
};
console.log(showContainer);
showRoom();
