// import { myFetch } from "./index.js";
// const getFetch = new myFetch();
import { getPost } from "./fetch.js";
import { products } from "./fetch.js";

const showCase = document.querySelector(".container");
showCase.addEventListener("click", (ev) => {
  getPost();
  ev.preventDefault();
});
