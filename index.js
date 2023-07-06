import { generateBackgroundColor } from "./src/helpers.js";
import { arrayMethods } from "./src/arrMethods.js";

const arrHeading = document.querySelector(".arrMethod");
const arrDesc = document.querySelector(".arrDesc");

generateBackgroundColor();

const showArrCheatSheet = (arr) => {
  const arrIndex = Math.floor(Math.random() * arr.length + 1);
  arrHeading.textContent = arr[arrIndex].method;
  arrDesc.textContent = arr[arrIndex].description;
};

showArrCheatSheet(arrayMethods);

// const displayArrayMethod = () => {
//   return (arrHeading.textContent = "Testing");
// };

// displayArrayMethod();
//const heading = document.querySelector(".arrHeading");

// const generateRandomBackgroundColor = () => {
//   const selectedBgColor = bgColors[randNum];

//   document.body.style.backgroundColor = selectedBgColor;
// };

// generateRandomBackgroundColor();

// const displayArrMethods = () => {
//   const randNum = Math.floor(Math.random() * 5 + 1);

//   const method = document.querySelector(".arrMethod");
//   const desc = document.querySelector(".arrDesc");
//   const useCase = document.querySelector(".arrUseCase");
//   const egs = document.querySelector(".arrEgs");

//   method.textContent = arrayMethods[randNum].method;
//   desc.textContent = arrayMethods[randNum].description;
//   useCase.textContent = arrayMethods[randNum].usecase;
//   egs.innerHTML = arrayMethods[randNum].illustration;
// };

// displayArrMethods();
