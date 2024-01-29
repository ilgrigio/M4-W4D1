const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

export const getProductDetails = async (productId) => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdiZjkxM2Y2NTAwMThkMDk1M2UiLCJpYXQiOjE3MDYxNzQzOTksImV4cCI6MTcwNzM4Mzk5OX0.1h0Olg_-10fm4W2_MZIaF0czaEWpLqW0gQF5hrqj138",
        },
      }
    );
    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }
    const product = await response.json();
    return product;
  } catch (err) {
    console.error(err);
  }
};

// Function to show product details
const showProductDetails = async () => {
  const product = await getProductDetails(productId);
  const detailsContainer = document.querySelector(".container");

  // Crea l'HTML per i dettagli del prodotto
  const productDetails = `
  <div class="bkg">
    <img src="${product.imageUrl}" alt="${product.name}" />
    <div class="info">
        <h1>${product.name}</h1>
        <h3>${product.brand}</h3>
        <p>${product.description}</p>
        <div class="sfondoh4">
           Price <h3>€ ${product.price}</h3>
        </div>
        <button onclick="location.href='frontend.html'" type="button" class="btn btn-danger">
        Ritorna in Showroom
      </button>
    </div>
</div>
  `;
  // Add details into DOM
  detailsContainer.innerHTML = productDetails;
};

document.addEventListener("DOMContentLoaded", showProductDetails);
