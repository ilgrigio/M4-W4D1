export let products = [];

export const url = "https://striveschool-api.herokuapp.com/api/product/";

// Fetch POST
export const sendPost = async (dataProduct) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdiZjkxM2Y2NTAwMThkMDk1M2UiLCJpYXQiOjE3MDYxNzQzOTksImV4cCI6MTcwNzM4Mzk5OX0.1h0Olg_-10fm4W2_MZIaF0czaEWpLqW0gQF5hrqj138",
      },
      body: JSON.stringify(dataProduct),
    });
    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }
    await response.json();
  } catch (err) {
    console.log(err);
  }
};
// Fetch GET
export const getPost = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdiZjkxM2Y2NTAwMThkMDk1M2UiLCJpYXQiOjE3MDYxNzQzOTksImV4cCI6MTcwNzM4Mzk5OX0.1h0Olg_-10fm4W2_MZIaF0czaEWpLqW0gQF5hrqj138",
      },
    });
    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }
    products = await response.json();
    return products;
  } catch (err) {
    console.error(err);
  }
};
// Fetch DELETE
export const deletePost = async (productId) => {
  try {
    const response = await fetch(url + productId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdiZjkxM2Y2NTAwMThkMDk1M2UiLCJpYXQiOjE3MDYxNzQzOTksImV4cCI6MTcwNzM4Mzk5OX0.1h0Olg_-10fm4W2_MZIaF0czaEWpLqW0gQF5hrqj138",
      },
    });
    console.log(response);
    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }
    await response.json();
  } catch (error) {
    console.log("Error: " + error);
  }
};
// Fetch PUT
export const editPost = async (productId, updateProduct) => {
  try {
    const response = await fetch(url + productId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdiZjkxM2Y2NTAwMThkMDk1M2UiLCJpYXQiOjE3MDYxNzQzOTksImV4cCI6MTcwNzM4Mzk5OX0.1h0Olg_-10fm4W2_MZIaF0czaEWpLqW0gQF5hrqj138",
      },
      body: JSON.stringify(updateProduct),
    });
    console.log(response);
    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }
    const product = await response.json();
    console.log(`Product ${productId} edited.`);
    return product;
  } catch (error) {
    console.error(`Failed to edit product ${productId}: ${error}`);
  }
};
