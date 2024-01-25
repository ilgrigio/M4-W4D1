let myProducts = [
  {
    name: "Super Mario Odyssey",
    description:
      "Unisciti a Mario in un'enorme avventura 3D in tutto il mondo!",
    price: 59.99,
    brand: "Nintendo",
    imageURL: "./assets/super_mario_odyssey.png",
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    description:
      "Esplora la natura selvaggia di Hyrule in un'avventura open-world.",
    price: 69.99,
    brand: "Nintendo",
    imageURL: "./assets/the_legend_of_Zelda.jpg",
  },
  {
    name: "FIFA 22",
    description: "Il gioco di calcio più realistico mai realizzato.",
    price: 59.99,
    brand: "EA Sports",
    imageURL: "./assets/fifa22.png",
  },
  {
    name: "Call of Duty: Warzone",
    description: "Un'esperienza di combattimento intensa e frenetica.",
    price: 59.99,
    brand: "Activision",
    imageURL: "./assets/call-of-duty-warzone.jpg",
  },
  {
    name: "Minecraft",
    description: "Crea e esplora il tuo mondo personale.",
    price: 29.99,
    brand: "Mojang Studios",
    imageURL: "./assets/minecraft.jpg",
  },
  {
    name: "Cyberpunk 2077",
    description:
      "Un'avventura open-world nell'immaginario futuristico di Night City.",
    price: 59.99,
    brand: "CD Projekt",
    imageURL: "./assets/cyber_punk_2077.png",
  },
  {
    name: "Red Dead Redemption 2",
    description: "Un'avventura epica nel cuore selvaggio dell'America.",
    price: 59.99,
    brand: "Rockstar Games",
    imageURL: "./assets/red_dead_redemption_2.jpg",
  },
  {
    name: "Fortnite",
    description: "Unisciti a amici in un gioco di sopravvivenza e costruzione.",
    price: 0,
    brand: "Epic Games",
    imageURL: "./assets/fortnite.png",
  },
  {
    name: "Among Us",
    description: "Un gioco di squadra e tradimento ambientato nello spazio!",
    price: 4.99,
    brand: "Innersloth",
    imageURL: "./assets/among Us.png",
  },
  {
    name: "Assassin's Creed Valhalla",
    description: "Vivi l'epica saga vichinga di Assassin's Creed.",
    price: 59.99,
    brand: "Ubisoft",
    imageURL: "./assets/assassins-creed-valhalla.jpg",
  },
];

import { sendPost, products, getPost } from "./fetch.js";

const createProduct = (ev) => {
  ev.preventDefault();
  const name = document.getElementById("fname").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imgUrl").value;
  const price = parseFloat(document.getElementById("price").value);

  console.log(name);

  const dataProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  sendPost(dataProduct);
  console.log(dataProduct);
};

const sbmButton = document.getElementById("p-form");
sbmButton.addEventListener("submit", (event) => {
  createProduct(event);
});

const showProducts = async () => {
  const product = await getPost();
  console.log(product);
};

showProducts();
