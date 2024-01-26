export let products = [];

export const url = "https://striveschool-api.herokuapp.com/api/product/";

// Make function POST
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
    if (!response) {
      throw new Error(await response.text());
    }
    await response.json();
  } catch (err) {
    alert(err);
  }
};
// Make function GET
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
    products = await response.json();
    return products;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong!");
  }
};
