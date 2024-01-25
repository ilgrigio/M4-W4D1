// export function myFetch(url, key, option = "") {
//   myFetch.url = url;
//   myFetch.key = key;
//   myFetch.option = option;
// }
export let products = [];

export const url = "https://striveschool-api.herokuapp.com/api/product/";
export const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjdiZjkxM2Y2NTAwMThkMDk1M2UiLCJpYXQiOjE3MDYxNzQzOTksImV4cCI6MTcwNzM4Mzk5OX0.1h0Olg_-10fm4W2_MZIaF0czaEWpLqW0gQF5hrqj138";
export const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
  body: JSON.stringify({}),
};
// Make function POST
export const sendPost = async () => {
  try {
    const apiRequest = await fetch(url, key, options);
    products = await apiRequest.json();
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong!");
  }
};
// Make function GET
export const getPost = async ({ url, key, options: { method = "" } }) => {
  try {
    const apiRequest = await fetch(url, key, { options: (method = "GET") });
    products = await apiRequest.json();
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong!");
  }
};
