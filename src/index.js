import generateJoke from "./generate-joke"
import "./styles/main.scss";
import laughing from "./assets/laughing.png";

const laughImg = document.querySelector("#laughImg");
laughImg.src = laughing;
console.log(generateJoke());