import { generateBackgroundColor, setColors } from "./src/helpers.js";

const bgColorsArr = setColors();

generateBackgroundColor(bgColorsArr);

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
